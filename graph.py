import matplotlib
import zipfile
import numpy as np
import pandas as pd
import hvplot.xarray
from tqdm import tqdm
import holoviews as hv
import xarray as xr
from bokeh.embed import json_item
from bokeh.plotting import figure
import json
from matplotlib import pyplot as plt
from io import BytesIO
import io
from matplotlib.backends.backend_agg import FigureCanvasAgg
import base64
from flask import send_file, jsonify
fn = 'lf_specs.zarr'
specs = xr.open_dataset(fn)
matplotlib.use('Agg')


def getInitGraph(startDate, endDate, location):
    # look at 10 specific days of data
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    data_chunk = base_data.loc[starttime:endtime, :]
    graph = data_chunk.hvplot(
        x='time', y='frequency', rasterize=True, cmap='jet')
    plot = hv.render(graph)
    jso = json.dumps(json_item(plot))
    return jso


def getUpdatedGraph(startDate, endDate, graphType, location, f0=50):
    if graphType == 'Spectrogram':
        return generateSpectrogram(startDate, endDate, location)
    elif graphType == 'SPDF':
        return generateSPDF(startDate, endDate, location)
    else:
        return generateOctaveGraph(f0, location, startDate, endDate)


def generateSpectrogram(startDate, endDate, location):
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    data_chunk = base_data.loc[starttime:endtime, :]
    graph = data_chunk.hvplot(
        x='time', y='frequency', rasterize=True, cmap='jet')
    plot = hv.render(graph)
    jso = json.dumps(json_item(plot))
    return jso


def generateSPDF(startDate, endDate, location):
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    spec_slice = base_data.loc[starttime:endtime, :]
    spdf = get_spdf(spec_slice, fs_hz=200)
    return plot_spdf(spdf, log=False)


def get_spdf(spec, fs_hz, fmax=None, spl_bins=np.linspace(0, 120, 481),
             percentiles=[1, 5, 10, 50, 90, 95, 99]):
    """
    get_spdf - calculate the spectral probability distribution function for a given spectrogram slice

    Parameters
    ----------
    spec_like : xarray.DataArray
        DataArray with dimensions ['frequency', 'time']
    fs_hz : float
        sampling frequency in Hz
    fmax : float
        frequency up to which spectral PDF is computed
    spl_bins : np.array
        histogram bins for spectral level default is 481 bins between 0 and 120 dB rel uPa^2/Hz
    percentiles : list
        percentiles that will be computed along with the PDF

    Outputs
    -------
    spdf_dct : dictionary
        dictionary with keys ['freq', 'spl', 'pdf', 'number_psd'], and every percentile passed as an input
    """

    # set fmax
    if fmax is None:
        fmax = spec.frequency[-1]

    # set number of frequency bins
    n_freq_bin = int(len(spec.frequency) * fmax/(fs_hz/2)) + 1

    spdf_dct = {'freq': np.array(np.linspace(0, fmax, n_freq_bin)),
                'spl': spl_bins[:-1],
                'pdf': np.empty((n_freq_bin, 480)),
                'number_psd': len(spec.time)}

    # create instances in dictionary for each percentile given
    for p in percentiles:
        spdf_dct[str(p)] = np.empty(n_freq_bin)

    # calculate spdf
    for idx, freq_bin in enumerate(tqdm(spec.values.transpose()[:n_freq_bin - 1])):
        hist, _ = np.histogram(freq_bin, bins=spl_bins, density=True)
        spdf_dct['pdf'][idx] = hist
        spdf_dct['50'][idx] = np.median(freq_bin)
        for p in percentiles:
            spdf_dct[str(p)][idx] = np.nanquantile(freq_bin, p/100)

    return spdf_dct


def plot_spdf(spdf, vmin=0.003, vmax=0.2, vdelta=0.0025, save=False, filename=None, log=True, title='Spectral PDF'):
    '''
    plot_spdf - plot the spectral probability distributino function with matplotlib

    Parameters
    ----------
    spdf : dictionary
        dictionary structured as the same as output of get_spdf
    vmin : float
        passed to plt.contourf()
    vmax : float
        passed to plt.contourf()
    vdelta : float
        passed to plt.contourf()
    save : bool
        whether or not to save the figure to file
    filename : string
        name of file if file is to be saved
    log : bool
        whether or not to plot x scale on log or linear scale (True means log)
    title : string
        title of plot

    '''
    # import some functions form matplotlib
    from matplotlib.colors import Normalize
    import matplotlib.colors as colors
    from matplotlib.lines import Line2D

    cbarticks = np.arange(vmin, vmax+vdelta, vdelta)
    fig, ax = plt.subplots(figsize=(9, 5))
    im = ax.contourf(spdf['freq'], spdf['spl'], np.transpose(spdf['pdf']),
                     cbarticks, norm=colors.Normalize(vmin=vmin, vmax=vmax),
                     cmap='jet', extend='max', alpha=0.50, linewidth=0)

    # plot some percentiles:
    plt.plot(spdf['freq'], spdf['1'], color='black')
    plt.plot(spdf['freq'], spdf['5'], color='black')
    plt.plot(spdf['freq'], spdf['10'], color='black')
    plt.plot(spdf['freq'], spdf['50'], color='black')
    plt.plot(spdf['freq'], spdf['90'], color='black')
    plt.plot(spdf['freq'], spdf['95'], color='black')
    plt.plot(spdf['freq'], spdf['99'], color='black')

    plt.ylabel(r'spectral level (dB rel $1 \mathrm{\frac{μ Pa^2}{Hz}}$)')
    plt.xlabel('frequency (Hz)')
    plt.ylim([36, 100])
    plt.xlim([0, 90])
    if log:
        plt.xscale('log')
    #plt.colorbar(im, ax=ax, ticks=np.arange(vmin, vmax+vdelta, 0.05),  pad=0.1, label='probability')

    plt.colorbar(im, ax=ax, ticks=[vmin, vmin + (vmax-vmin)/4, vmin + (vmax-vmin)/2,
                 vmin + 3*(vmax-vmin)/4,  vmax],  pad=0.03, label='probability', format='%.3f')
    plt.tick_params(axis='y')
    plt.grid(True)
    plt.title(title)

    handles, labels = plt.gca().get_legend_handles_labels()
    line = Line2D(
        [0], [0], label='percentiles: 1, 5, 10, 50, 90, 95, 99', color='k')
    handles.extend([line])
    plt.legend(handles=handles, loc='upper right')
    plt.tight_layout()

    plt.xlim((200/512, 100))

    my_stringIObytes = io.BytesIO()
    plt.savefig(my_stringIObytes, format='jpg')
    my_stringIObytes.seek(0)
    # return base64.b64encode(my_stringIObytes.read())
    img_base64 = base64.b64encode(my_stringIObytes.read())
    return jsonify({'image': str(img_base64)})


def get_freq_band(f0, spec):
    f_lo = f0/(2**(1/6))
    f_hi = f0*(2**(1/6))
    spec_band = spec.loc[:, f_lo:f_hi]
    spec_band_lin = 10**(spec_band/10)
    spec_band_lin_mean = spec_band_lin.median('frequency')
    spec_band_mean = 10*np.log10(spec_band_lin_mean)
    return spec_band_mean


def generateDfForOctaveBox(f0, location, startDate, endDate):
    spec_chunk = specs[location].loc[startDate:endDate, :]
    octave_band_f0 = get_freq_band(f0, spec_chunk)
    # get xarray values in list
    octave_f0_value = octave_band_f0.values.tolist()
    # get xarray date values in list
    octave_band_f0_time = octave_band_f0.coords['time'].values
    # fetch the year month and day value
    dates_lst = [str(x.astype('datetime64[D]')) for x in octave_band_f0_time]
    ovtave_dataframe = pd.DataFrame(
        {location: octave_f0_value, 'date': dates_lst}, columns=[location, 'date'])
    return ovtave_dataframe


def generateOctaveGraph(f0, location, startDate, endDate):
    import hvplot.pandas  # noqa
    from holoviews import opts
    df_octave = generateDfForOctaveBox(f0, location, startDate, endDate)
    boxplot = df_octave.hvplot.box(y=location, by='date', ylabel=location,
                                   width=900, height=400, legend=False, outlier_color='white')
    boxplot.opts(title="Octave Band", xrotation=90)
    plot = hv.render(boxplot)
    jso = json.dumps(json_item(plot))
    return jso


def getZip():
    starttime = pd.Timestamp('2017-07-01')
    endtime = pd.Timestamp('2017-08-01')
    base_data = specs['axial_base']
    slice_data = base_data.loc[starttime:endtime, :]
    slice_frame = slice_data.to_dataframe()
    slice_frame.to_csv("result.csv.zip", compression="zip")

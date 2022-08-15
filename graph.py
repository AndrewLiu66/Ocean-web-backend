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
import hvplot.pandas
from holoviews import opts
from matplotlib.colors import Normalize
import matplotlib.colors as colors
from matplotlib.lines import Line2D

fn = 'lf_specs.zarr'
specs = xr.open_dataset(fn)
matplotlib.use('Agg')


def getInitGraph(startDate, endDate, location):
    return generateSpectrogram(startDate, endDate, location)


def getUpdatedGraph(startDate, endDate, graphType, location, f0=50):
    if graphType == 'Spectrogram':
        return generateSpectrogram(startDate, endDate, location)
    elif graphType == 'SPDF':
        return generateSPDF(startDate, endDate, location)
    else:
        return generateOctaveGraph(location, startDate, endDate, f0)

def generateSpectrogramGraph(startDate, endDate, location):
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    base_data = specs[location]
    data_chunk = base_data.loc[starttime:endtime, :]
    graph = data_chunk.hvplot(
        x='time', y='frequency', rasterize=True, cmap='jet', width=1000, height=500)
    plot = hv.render(graph)
    return plot

def generateSpectrogram(startDate, endDate, location):
    plot = generateSpectrogramGraph(startDate, endDate, location)
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
    if fmax is None:
        fmax = spec.frequency[-1]

    n_freq_bin = int(len(spec.frequency) * fmax/(fs_hz/2)) + 1

    spdf_dct = {'freq': np.array(np.linspace(0, fmax, n_freq_bin)),
                'spl': spl_bins[:-1],
                'pdf': np.empty((n_freq_bin, 480)),
                'number_psd': len(spec.time)}

    for p in percentiles:
        spdf_dct[str(p)] = np.empty(n_freq_bin)

    for idx, freq_bin in enumerate(tqdm(spec.values.transpose()[:n_freq_bin - 1])):
        hist, _ = np.histogram(freq_bin, bins=spl_bins, density=True)
        spdf_dct['pdf'][idx] = hist
        spdf_dct['50'][idx] = np.median(freq_bin)
        for p in percentiles:
            spdf_dct[str(p)][idx] = np.nanquantile(freq_bin, p/100)

    return spdf_dct


def plot_spdf(spdf, vmin=0.003, vmax=0.2, vdelta=0.0025, save=False, filename=None, log=True, title='Spectral PDF'):
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


def generateDfForOctaveBox(f0, slice_data, location):
    octave_band_f0 = get_freq_band(f0, slice_data)
    octave_f0_value = octave_band_f0.values.tolist()
    octave_band_f0_time = octave_band_f0.coords['time'].values
    dates_lst = [str(x.astype('datetime64[D]')) for x in octave_band_f0_time]
    ovtave_dataframe = pd.DataFrame(
        {location: octave_f0_value, 'date': dates_lst}, columns=[location, 'date'])
    return ovtave_dataframe


def generateOctave(location, startDate, endDate, f0):
    starttime = pd.Timestamp(startDate)
    endtime = pd.Timestamp(endDate)
    slice_data = specs[location].loc[starttime:endtime,:]
    df_octave = generateDfForOctaveBox(f0, slice_data, location)
    boxplot = df_octave.hvplot.box(y=location, by='date', ylabel=location,
                                   width=1000, height=500, legend=False, outlier_color='white')
    boxplot.opts(title="Octave Band", xrotation=90)
    plot = hv.render(boxplot)
    return plot


def generateOctaveGraph(location, startDate, endDate, f0):
    plot = generateOctave(location, startDate, endDate, f0)
    jso = json.dumps(json_item(plot))
    return jso


def getZip():
    starttime = pd.Timestamp('2017-07-01')
    endtime = pd.Timestamp('2017-08-01')
    base_data = specs['axial_base']
    slice_data = base_data.loc[starttime:endtime, :]
    slice_frame = slice_data.to_dataframe()
    slice_frame.to_csv("result.csv.zip", compression="zip")

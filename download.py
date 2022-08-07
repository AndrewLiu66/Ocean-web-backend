from flask import jsonify, make_response, json
from graph import generateDfForOctaveBox
from graph import get_spdf
import pandas as pd
import numpy as np
# helper method
import gzip


def median(df, location):
    return df[location].median()


def firstQuartile(df, location):
    return int(df[location].quantile([0.25]))


def thirdQuartile(df, location):
    return int(df[location].quantile([0.75]))


def getLowerBound(df, location):
    Q1 = df[location].quantile(0.25)
    Q3 = df[location].quantile(0.75)
    IQR = Q3 - Q1
    return Q1 - (1.5 * IQR)


def getUpperBound(df, location):
    Q1 = df[location].quantile(0.25)
    Q3 = df[location].quantile(0.75)
    IQR = Q3 - Q1
    return Q3 + (1.5 * IQR)


def generateSpectrogramCsvValue(slice_data, location):
    slice_frame = slice_data.to_dataframe()
    slice_frame = slice_frame.reset_index()
    slice_frame[location] = slice_frame[location].fillna(0)
    slice_dict = slice_frame.to_dict('records')
    result = {"data": slice_dict}
    content = gzip.compress(json.dumps(result).encode('utf8'), 5)
    response = make_response(content)
    response.headers['Content-length'] = len(content)
    response.headers['Content-Encoding'] = 'gzip'
    return response


def generateCsvSPDF(spec_slice):
    spdf = get_spdf(spec_slice, fs_hz=200)
    freq = spdf['freq']
    L1 = spdf['1']
    L5 = spdf['5']
    L10 = spdf['10']
    L50 = spdf['50']
    L90 = spdf['90']
    L95 = spdf['95']
    L99 = spdf['99']
    spdf_df = pd.DataFrame(zip(freq, L1, L5, L10, L50, L90, L95, L99), columns=[
                           'Frequency', 'Level 1', 'Level 5', 'Level 10', 'Level 50', 'Level 90', 'Level 95', 'Level 99'])
    spdf_dict = spdf_df.to_dict('records')
    return jsonify({"data": spdf_dict})


def generateCsvOctave(slice_data, location, f0=50):
    df_octave = generateDfForOctaveBox(f0, slice_data, location)
    temp = df_octave.groupby('date').apply(lambda x: pd.Series({
        'median': median(x, location),
        'firstQuartile': firstQuartile(x, location),
        'thirdQuartile': thirdQuartile(x, location),
        'min': getLowerBound(x, location),
        'max': getUpperBound(x, location)
    }))

    temp = temp.reset_index()
    temp = temp.to_dict('records')
    return jsonify({"data": temp})

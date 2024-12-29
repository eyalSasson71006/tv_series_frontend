import axios from "axios";

export const apiUrl = "http://localhost:8181/series";

export async function getSeries() {
    const response = await axios.get(apiUrl);
    return response.data;
}

export async function getLikedSeries() {
    const response = await axios.get(apiUrl + "/liked");
    return response.data;
}

export const getSeriesById = async (seriesId) => {
    try {
        const response = await axios.get(`${apiUrl}/${seriesId}`);        
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const likeSeries = async (seriesId) => {
    try {
        const response = await axios.put(`${apiUrl}/like/${seriesId}`);
        return response.data;
    } catch (err) {
        throw new Error(err.message);
    }
};
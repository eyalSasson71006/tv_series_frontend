import { useState } from "react";
import { getLikedSeries, getSeries, getSeriesById, likeSeries } from "../services/seriesApiService";
import useAxios from "../../hooks/useAxios";

export default function useSeries() {
    const [series, setSeries] = useState([]);
    const [seriesPreview, setSeriesPreview] = useState();
    const [likedSeries, setLikedSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useAxios();
    const getAllSeries = async () => {
        setIsLoading(true);
        try {
            let data = await getSeries();
            setSeries(data);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    const handleGetLikedSeries = async () => {
        setIsLoading(true);
        try {
            let data = await getLikedSeries();
            setLikedSeries(data);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    const handleGetSeriesById = async (id) => {
        setIsLoading(true);
        try {
            let data = await getSeriesById(id);
            setSeriesPreview(data);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    async function handleLikeSeries(seriesId) {
        try {
            let result = await likeSeries(seriesId);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    return { getAllSeries, handleLikeSeries, likedSeries, setLikedSeries, handleGetLikedSeries, handleGetSeriesById, seriesPreview, series, isLoading, error };
}

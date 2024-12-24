import { useState } from "react";
import { getSeries, likeSeries } from "../services/seriesApiService";
import useAxios from "../../hooks/useAxios";

export default function useSeries() {
    const [series, setSeries] = useState([]);
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

    async function handleLikeSeries(seriesId) {
        try {
            let result = await likeSeries(seriesId);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    return { getAllSeries, handleLikeSeries, series, isLoading, error };
}

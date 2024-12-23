import { useState } from "react";
import { getSeries } from "../services/seriesApiService";

export default function useSeries() {
    const [series, setSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

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

    return { getAllSeries, series, isLoading, error };
}

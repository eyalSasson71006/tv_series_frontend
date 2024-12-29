import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSeries from "../hooks/useSeries";

export default function SeriesPreviewPage() {
	const { id } = useParams();
	const { handleGetSeriesById, seriesPreview } = useSeries();
	useEffect(() => {
		if (!id) return;
		handleGetSeriesById(id);
	}, [id]);

	console.log(seriesPreview);

	return <div></div>;
}

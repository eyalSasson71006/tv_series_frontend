import React, { useEffect } from "react";
import SeriesCard from "./card/SeriesCard";
import useSeries from "../hooks/useSeries";
import { Box } from "@mui/material";
import Spinner from "../../components/Spinner";

export default function SeriesList() {
	const { getAllSeries, series, isLoading, error } = useSeries();
	useEffect(() => {
		getAllSeries();
	}, []);
	if (isLoading) return <Spinner />;
	return (
		<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
			{series?.map((card) => (
				<SeriesCard card={card} key={card.id} />
			))}
		</Box>
	);
}

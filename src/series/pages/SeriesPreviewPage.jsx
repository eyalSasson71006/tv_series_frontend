import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSeries from "../hooks/useSeries";
import { Grid2, Typography } from "@mui/material";

export default function SeriesPreviewPage() {
	const { id } = useParams();
	const { handleGetSeriesById, seriesPreview } = useSeries();
	useEffect(() => {
		if (!id) return;
		handleGetSeriesById(id);
	}, [id]);

	console.log(seriesPreview);
	if (!seriesPreview) return <h1>Loading...</h1>;
	return (
		<Grid2
			container
			size={12}
			sx={{
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				p: 3,
			}}
		>
			<Grid2 size={12}>
				<Typography variant="h2" color="white" align="center">
					{seriesPreview.title}
				</Typography>
			</Grid2>
			<Grid2 container gap={6}>
				<Grid2>
					<img
						src={seriesPreview.image}
						alt={seriesPreview.name}
						style={{ height: "60vh" }}
					/>
				</Grid2>
				<Grid2
					container
					size={7}
					sx={{ alignContent: "center", gap: 2 }}
				>
					<Grid2 size={12}>
						<Typography variant="h6">
							<b>Genre: </b>
							{seriesPreview.genre}
						</Typography>
					</Grid2>
					<Grid2 size={12}>
						<Typography variant="h6">
							<b>Released: </b>
							{seriesPreview.release_year}
						</Typography>
					</Grid2>
					<Grid2>
						<Typography variant="h6">
							<b>Description: </b>
							{seriesPreview.description}
						</Typography>
					</Grid2>
				</Grid2>
			</Grid2>
		</Grid2>
	);
}

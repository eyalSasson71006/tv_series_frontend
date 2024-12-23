import {
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SeriesCard({ card }) {
	const navigate = useNavigate();

	return (
		<Card
			sx={{
				width: 250,
				m: 2,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<CardActionArea>
				<CardContent>
					<CardMedia
						sx={{ height: 375 }}
						image={card.image}
						title={card.title}
					/>
					<CardHeader sx={{fontSize: 20}} title={card.title} subheader={card.genre} />
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

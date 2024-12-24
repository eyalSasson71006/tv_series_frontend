import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useSeries from "../../hooks/useSeries";

export default function SeriesCard({ card }) {
	const navigate = useNavigate();
	const { handleLikeSeries } = useSeries();
	const [isFavorite, setIsFavorite] = useState(card?.is_favorite);

	const handleClick = async () => {
		setIsFavorite(await handleLikeSeries(card.id));
	};

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
			<CardContent>
				<CardActionArea>
					<CardMedia
						sx={{ height: 375 }}
						image={card.image}
						title={card.title}
					/>
				</CardActionArea>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<CardHeader
						sx={{ fontSize: 20 }}
						title={card.title}
						subheader={card.genre}
					/>
					<IconButton onClick={handleClick}>
						{isFavorite ? (
							<FavoriteIcon fontSize="large" color="error" />
						) : (
							<FavoriteBorderIcon fontSize="large" />
						)}
					</IconButton>
				</Box>
			</CardContent>
		</Card>
	);
}

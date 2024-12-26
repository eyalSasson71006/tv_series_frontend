import { Avatar, Box, Divider, Grid2, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useSeries from "../../series/hooks/useSeries";
import SeriesCard from "../../series/components/card/SeriesCard";
import ScrollBar from "../../components/ScrollBar";

export default function MyAccountPage() {
	const { user } = useCurrentUser();
	const { currentUser, handleGetUserByEmail } = useUsers();
	const { likedSeries, handleGetLikedSeries } = useSeries();

	useEffect(() => {
		if (user) {
			handleGetUserByEmail(user.email);
			handleGetLikedSeries();
		}
	}, [user]);

	const centerGridSx = {
		justifyContent: "center",
		alignItems: "center",
		gap: 2,
	};
	if (!currentUser || !likedSeries) return <h1>Loading...</h1>;
	return (
		<Grid2 container size={12} sx={{ p: 2, ...centerGridSx }}>
			<Grid2
				container
				size={12}
				sx={{ ...centerGridSx, flexDirection: "column" }}
			>
				<Typography variant="h2">My Account</Typography>
				<Avatar
					sx={{ width: 200, height: 200, fontSize: 100 }}
					alt="avatar"
					src={"http://localhost:8181/" + currentUser?.image}
				/>
			</Grid2>
			<Grid2 container size={12} sx={{ ...centerGridSx }}>
				<Grid2 size={1.5}>
					<Typography align="center" variant="h5">
						My Favorites:
					</Typography>
				</Grid2>
				<Grid2 size={10}>
					<ScrollBar>
						{likedSeries.map((series) => (
							<Box key={series.id}>
								<SeriesCard card={series} />
							</Box>
						))}
					</ScrollBar>
				</Grid2>
			</Grid2>
		</Grid2>
	);
}

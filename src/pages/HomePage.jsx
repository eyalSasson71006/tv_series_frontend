import React from "react";
import { useCurrentUser } from "../users/providers/UserProvider";
import SeriesList from "../series/components/SeriesList";
import { Box } from "@mui/material";

export default function HomePage() {
	return (
		<Box
			sx={{
				justifyContent: "center",
				alignContent: "center",
				alignItems: "center",
				gap: 2,
			}}
		>
			<SeriesList />
		</Box>
	);
}

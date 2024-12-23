import React from "react";
import { Avatar, Box, Button, Divider, Grid2, Typography } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
	return (
		<Grid2
			container
			sx={{
				justifyContent: "center",
				alignContent: "center",
				gap: 4,
				height: "90vh",
				textAlign: "center",
			}}
		>
			<Grid2 size={12}>
				<Typography variant="h2">Register Page</Typography>
			</Grid2>
			<RegisterForm />
		</Grid2>
	);
}

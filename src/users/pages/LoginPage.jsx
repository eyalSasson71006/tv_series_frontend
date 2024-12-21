import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
	return (
		<Grid2
			container
			sx={{
				justifyContent: "center",
                alignContent: "center",
                gap:4,
				height: "90vh",
				textAlign: "center",
			}}
		>
			<Grid2 size={12}>
				<Typography variant="h2">Login Page</Typography>
			</Grid2>
			<Grid2
				container
				size={8}
				sx={{
					backgroundColor: "white",
					color: "#31353D",
					borderRadius: 2,
					justifyContent: "center",
					p: 4,
				}}
			>
				<Grid2 size={{ xs: 8, md: 4 }}>
					<LoginForm />
				</Grid2>
				<Divider orientation="vertical" flexItem sx={{mx:2}} />
				<Grid2 size={{ xs: 8, md: 4 }} sx={{alignContent:"center"}}>
					<GoogleLoginButton />
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							mt: 1,
						}} 
					>
						<Typography variant="body2">
							Don't have an account?
						</Typography>
						<Button sx={{ color: "#31353D" }}>Sign Up</Button>
					</Box>
				</Grid2>
			</Grid2>
		</Grid2>
	);
}

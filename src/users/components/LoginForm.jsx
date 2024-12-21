import { Box, Button, FormControl, TextField } from "@mui/material";
import React from "react";

export default function LoginForm() {
	return (
		<FormControl sx={{ width: "100%", gap: 2 }}>
			<TextField label="Email" />
			<TextField label="password" />
			<Button variant="contained" sx={{ backgroundColor: "#31353D" }}>
				Login
			</Button>
		</FormControl>
	);
}

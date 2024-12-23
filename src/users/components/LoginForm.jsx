import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import useUsers from "../hooks/useUsers";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../helpers/schemas/loginSchema";

export default function LoginForm() {
	const { handleLogin } = useUsers();
	const { data, errors, handleChange, validateForm, onSubmit } = useForm(
		initialLoginForm,
		loginSchema,
		handleLogin
	);
	return (
		<FormControl sx={{ width: "100%", gap: 2 }}>
			<TextField
				label="Email"
				name="email"
				value={data.email}
				error={Boolean(errors.email)}
				helperText={errors.email}
				onChange={handleChange}
				required
			/>
			<TextField
				label="password"
				name="password"
				value={data.password}
				error={Boolean(errors.password)}
				helperText={errors.password}
				onChange={handleChange}
				required
			/>
			<Button
				variant="contained"
				sx={{ backgroundColor: "#31353D" }}
				onClick={onSubmit}
				disabled={!validateForm()}
			>
				Login
			</Button>
		</FormControl>
	);
}

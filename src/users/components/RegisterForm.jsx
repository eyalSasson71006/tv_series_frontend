import React, { useState } from "react";
import {
	Button,
	Avatar,
	FormControl,
	Divider,
	TextField,
	Grid2,
} from "@mui/material";
import useForm from "../../hooks/useForm";
import initialRegisterForm from "../helpers/initialForms/initialRegisterForm";
import registerSchema from "../helpers/schemas/registerSchema";
import useUsers from "../hooks/useUsers";
import InputFileUpload from "../../components/UploadFileButton";

export default function RegisterForm() {
	const { handleRegister } = useUsers();
	const { data, errors, setData, handleChange, validateForm, onSubmit } =
		useForm(initialRegisterForm, registerSchema, handleRegister);
console.log(data.imageUpload);

	return (
		<FormControl sx={{ display: "flex", alignItems: "center" }}>
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
				<Grid2
					container
					size={{ xs: 8, md: 4 }}
					sx={{
						width: "100%",
						gap: 2,
						justifyContent: "center",
						alignContent: "end",
					}}
				>
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
				</Grid2>
				<Divider orientation={"vertical"} flexItem sx={{ mx: 2 }} />
				<Grid2
					container
					size={{ xs: 8, md: 4 }}
					sx={{
						alignContent: "end",
						justifyContent: "center",
						gap: 2,
					}}
				>
					<Avatar
						sx={{ width: 60, height: 60 }}
						src={
							data.imageUpload
								? URL.createObjectURL(data.imageUpload)
								: ""
						}
					/>
					<InputFileUpload
						title="Upload Image"
						handleChange={handleChange}
						value={data.imageUpload}
						name="imageUpload"
						removeFile={() =>
							setData((prev) => ({ ...prev, imageUpload: null }))
						}
					/>
				</Grid2>
				<Grid2 size={12} mt={1}>
					<Button
						variant="contained"
						sx={{ backgroundColor: "#31353D" }}
						onClick={onSubmit}
						disabled={!validateForm()}
					>
						Register
					</Button>
				</Grid2>
			</Grid2>
		</FormControl>
	);
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, Input, Typography } from "@mui/material";
import { handleUpload } from "../users/services/usersApiService";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

export default function InputFileUpload({
	value,
	name,
	title,
	handleChange,
	removeFile,
}) {
	return (
		<Box>
			<Button
				component="label"
				role={undefined}
				variant="contained"
				tabIndex={-1}
				startIcon={<CloudUploadIcon />}
			>
				{title}
				<VisuallyHiddenInput
					name={name}
					type="file"
					onChange={handleChange}
				/>
			</Button>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				{value?.name && (
					<IconButton fontSize="small" onClick={removeFile}>
						X
					</IconButton>
				)}
				<Typography
					sx={{
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						WebkitLineClamp: 1,
					}}
				>
					{value?.name}
				</Typography>
			</Box>
		</Box>
	);
}

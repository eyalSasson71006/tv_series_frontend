import { Avatar, Box } from "@mui/material";
import React from "react";
import InputFileUpload from "../../components/UploadFileButton";
import photoUrlNormalize from "../../helpers/photoUrlNormalize";

export default function ImageUploadComponent({ data, setData, handleChange }) {
	function handleSrc(image) {
		if (!image) return null;
		if (typeof image == "string") {
			return photoUrlNormalize(image);
		} else if (typeof image == "object") {
			return URL.createObjectURL(image);
		}
	}

	if (!data) {
		return <></>;
	}
	return (
		<>
			<Avatar
				sx={{ width: 60, height: 60 }}
				src={handleSrc(data.imageUpload)}
			/>
			<InputFileUpload
				title="Upload Image"
				handleChange={handleChange}
				value={data?.imageUpload}
				name="imageUpload"
				removeFile={() =>
					setData((prev) => ({ ...prev, imageUpload: null }))
				}
			/>
		</>
	);
}

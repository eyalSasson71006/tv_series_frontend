import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

export default function DialogComponent({
	children,
	isOpen,
	setIsOpen,
	title,
	sx,
}) {
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Dialog
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				component={"div"}
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<Box>
					<DialogContent sx={{ ...sx }}>{children}</DialogContent>
				</Box>
			</Dialog>
		</>
	);
}

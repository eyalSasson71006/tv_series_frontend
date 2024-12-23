import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ROUTES from "../../../routes/routesModel";
import useUsers from "../../../users/hooks/useUsers";

export default function Logged() {
	const { handleLogout } = useUsers();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Tooltip title="My Account">
				<IconButton
					onClick={handleClick}
					sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
				>
					<Avatar
						alt="avatar"
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
					/>
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.USER_PROFILE);
						handleClose();
					}}
				>
					My account
				</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</>
	);
}

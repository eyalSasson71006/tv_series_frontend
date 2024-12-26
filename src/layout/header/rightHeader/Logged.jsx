import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ROUTES from "../../../routes/routesModel";
import useUsers from "../../../users/hooks/useUsers";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function Logged() {
	const { user } = useCurrentUser();
	const { handleLogout, currentUser, handleGetUserByEmail } = useUsers();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		if (user) {
			handleGetUserByEmail(user.email);
		}
	}, [user]);

	return (
		<>
			<Tooltip title="My Account">
				<IconButton
					onClick={handleClick}
					sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
				>
					<Avatar
						alt="avatar"
						src={"http://localhost:8181/" + currentUser?.image}
					/>
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.MY_ACCOUNT);
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

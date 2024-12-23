import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function NotLogged() {
	const navigate = useNavigate();

	return (
		<>
			<Button
				sx={{ color: "white" }}
				onClick={() => navigate(ROUTES.LOGIN)}
			>
				Login
			</Button>
			<Button
				sx={{ color: "white" }}
				onClick={() => navigate(ROUTES.REGISTER)}
			>
				register
			</Button>
		</>
	);
}

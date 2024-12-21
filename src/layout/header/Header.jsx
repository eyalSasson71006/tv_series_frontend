import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LeftHeader from "./leftHeader/LeftHeader";
import RightHeader from "./rightHeader/RightHeader";

export default function Header() {
	return (
		<AppBar position="sticky" elevation={10}>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <LeftHeader/>
                <RightHeader/>
            </Toolbar>
		</AppBar>
	);
}

import React from "react";
import Backdrop from "@mui/material/Backdrop";
import "../index.css";
export default function Spinner() {
	return (
		<Backdrop
			sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
			open={true}
		>
			<img src="/spinner.png" className="spinner"/>
		</Backdrop>
	);
}

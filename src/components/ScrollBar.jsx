import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function ScrollBar({ children }) {
	const container = useRef(null);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		const currentContainer = container.current;
		if (!currentContainer) return;

		const handleMouseDown = (e) => {
			setIsDown(true);
			setStartX(e.pageX - currentContainer.offsetLeft);
			setScrollLeft(currentContainer.scrollLeft);
		};

		const handleMouseUp = () => {
			setIsDown(false);
		};

		const handleMouseLeave = () => {
			setIsDown(false);
		};

		const handleMouseMove = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - currentContainer.offsetLeft;
			const walkX = x - startX;
			currentContainer.scrollLeft = scrollLeft - walkX;
		};

		currentContainer.addEventListener("mousedown", handleMouseDown);
		currentContainer.addEventListener("mouseup", handleMouseUp);
		currentContainer.addEventListener("mouseleave", handleMouseLeave);
		currentContainer.addEventListener("mousemove", handleMouseMove);

		return () => {
			currentContainer.removeEventListener("mousedown", handleMouseDown);
			currentContainer.removeEventListener("mouseup", handleMouseUp);
			currentContainer.removeEventListener(
				"mouseleave",
				handleMouseLeave
			);
			currentContainer.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isDown, startX, scrollLeft, container.current]);

	return (
		<Box
			ref={container}
			sx={{
				display: "flex",
				flexWrap: "nowrap",
				flexGrow: 1,
				overflowX: "auto",
				cursor: isDown ? "grabbing" : "grab",
				userSelect: "none",
				"&::-webkit-scrollbar": {
					display: "none",
				},
				scrollbarWidth: "none",
				msOverflowStyle: "none",
			}}
		>
			{children}
		</Box>
	);
}

import {
	Avatar,
	Box,
	Button,
	Grid2,
	IconButton,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useSeries from "../../series/hooks/useSeries";
import SeriesCard from "../../series/components/card/SeriesCard";
import ScrollBar from "../../components/ScrollBar";
import photoUrlNormalize from "../../helpers/photoUrlNormalize";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import DialogComponent from "../../components/DialogComponent";
import ImageUploadComponent from "../components/ImageUploadComponent";
import editImageSchema from "../helpers/schemas/editImageSchema";
import useForm from "../../hooks/useForm";
import Spinner from "../../components/Spinner";

export default function MyAccountPage() {
	const { user } = useCurrentUser();
	const { currentUser, handleGetUserByEmail } = useUsers();
	const { likedSeries, handleGetLikedSeries } = useSeries();
	const [isEdit, setIsEdit] = useState(false);
	const { data, setData, handleChange, validateForm, onSubmit } = useForm(
		{ imageUpload: currentUser?.image || null },
		editImageSchema,
		() => {
			setIsEdit(false);
		}
	);

	useEffect(() => {
		if (user) {
			handleGetUserByEmail(user.email);
			handleGetLikedSeries();
		}
	}, [user]);

	useEffect(() => {
		if (!currentUser) return;
		setData({
			imageUpload: currentUser?.image,
			email: currentUser?.email,
		});
	}, [currentUser]);
	const centerGridSx = {
		justifyContent: "center",
		alignItems: "center",
		gap: 2,
	};
	if (!currentUser || !likedSeries) return <Spinner />;
	return (
		<Grid2 container size={12} sx={{ p: 2, ...centerGridSx }}>
			{isEdit && (
				<DialogComponent
					isOpen={isEdit}
					setIsOpen={setIsEdit}
					title={"Edit Profile Picture"}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 2,
					}}
				>
					<ImageUploadComponent
						data={data}
						setData={setData}
						handleChange={handleChange}
					/>
					<Button disabled={!validateForm()} onClick={onSubmit}>
						Save
					</Button>
				</DialogComponent>
			)}
			<Grid2
				container
				size={12}
				sx={{
					...centerGridSx,
					flexDirection: "column",
					position: "relative",
				}}
			>
				<Typography variant="h2">My Account</Typography>
				<Avatar
					sx={{ width: 200, height: 200, fontSize: 100 }}
					alt="avatar"
					src={photoUrlNormalize(currentUser?.image)}
				/>
				<IconButton
					sx={{ position: "absolute", top: 0, left: 0 }}
					onClick={() => setIsEdit(true)}
				>
					<EditIcon sx={{ color: "white" }} fontSize="large" />
				</IconButton>
			</Grid2>
			{likedSeries.length > 0 && (
				<Grid2 container size={12} sx={{ ...centerGridSx }}>
					<Grid2 size={1.5}>
						<Typography align="center" variant="h5">
							My Favorites:
						</Typography>
					</Grid2>
					<Grid2 size={10}>
						<ScrollBar>
							{likedSeries.map((series) => (
								<Box key={series.id}>
									<SeriesCard card={series} />
								</Box>
							))}
						</ScrollBar>
					</Grid2>
				</Grid2>
			)}
		</Grid2>
	);
}

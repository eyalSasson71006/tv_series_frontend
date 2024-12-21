import React, { useEffect } from "react";
import { googleLoginCallback } from "../users/services/usersApiService";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function GoogleLoginButton() {
	useEffect(() => {
		window.google.accounts.id.initialize({
			client_id: GOOGLE_CLIENT_ID,
			callback: googleLoginCallback,
		});

		window.google.accounts.id.renderButton(
			document.getElementById("google-login-button"),
			{ theme: "outline", size: "large" }
		);
	}, []);

	return <div id="google-login-button"></div>;
}

export default GoogleLoginButton;

import React, { useEffect } from "react";
import useUsers from "../users/hooks/useUsers";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function GoogleLoginButton() {
	const { handleGoogleLogin } = useUsers();
	useEffect(() => {
		window.google.accounts.id.initialize({
			client_id: GOOGLE_CLIENT_ID,
			callback: handleGoogleLogin,
		});

		window.google.accounts.id.renderButton(
			document.getElementById("google-login-button"),
			{ theme: "outline", size: "large" }
		);
	}, []);

	return <div id="google-login-button"></div>;
}

export default GoogleLoginButton;

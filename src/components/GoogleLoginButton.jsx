import React, { useEffect } from "react";

const GOOGLE_CLIENT_ID =
	"22687597874-qabgq8avdi13o3c6eo2vdclh4ipuu9c5.apps.googleusercontent.com";

function GoogleLoginButton() {
	useEffect(() => {
		window.google.accounts.id.initialize({
			client_id: GOOGLE_CLIENT_ID,
			callback: handleCallbackResponse,
		});

		window.google.accounts.id.renderButton(
			document.getElementById("google-login-button"),
			{ theme: "outline", size: "large" }
		);
	}, []);

	const handleCallbackResponse = (response) => {
		const token = response.credential;

		// Send token to your backend
		fetch("http://localhost:8181/users/google-login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("App Token:", data.appToken);
			})
			.catch((err) => console.error(err));
	};

	return <div id="google-login-button"></div>;
}

export default GoogleLoginButton;

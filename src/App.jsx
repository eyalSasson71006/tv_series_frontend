import React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./users/providers/UserProvider";

function App() {
	return (
		<>
			<UserProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</UserProvider>
		</>
	);
}

export default App;

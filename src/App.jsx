import React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./users/providers/UserProvider";
import Layout from "./layout/Layout";

function App() {
	return (
		<>
			<UserProvider>
				<BrowserRouter>
					<Layout>
						<Router />
					</Layout>
				</BrowserRouter>
			</UserProvider>
		</>
	);
}

export default App;

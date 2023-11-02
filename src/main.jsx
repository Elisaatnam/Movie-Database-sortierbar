import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* den Browser hab ich hier schon und in der App.jsx definiere ich nur noch
		die Ruten */}
		<BrowserRouter>
			{/* der Provider ist in MovieContext.jsx zu finden, dort uebergebe ich schon
			die value */}
			<MovieProvider>
				<App />
			</MovieProvider>
		</BrowserRouter>
	</React.StrictMode>,
);

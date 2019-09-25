import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import DetailsPage from "./DetailsPage";

const App = () => {
	return (
		<div>
			<header>
				<Link to="/">Adopt me!</Link>
			</header>
			<Router>
				<SearchParams path="/" />
				<DetailsPage path="/details/:id" />
			</Router>
		</div>
	);
};

render(<App />, document.getElementById("root"));

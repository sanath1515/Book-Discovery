import { ThemeProvider } from "@material-ui/core";
import Home from "./components/pages/Home/Home";
import theme from "./theme/theme";
import SingleDetailView from "./components/pages/SingleDetailView/SingleDetailView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./routing/ScrollToTop";
import SearchResult from "./components/pages/SearchResults/SearchResults";
import { useSelector } from "react-redux";
import { bookState } from "./store/reducers";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import React from "react";

export const App = () => {
	const exploreText = useSelector<bookState, bookState["category"]>(
		state => state.category
	);

	const searchText = useSelector<bookState, bookState["searchText"]>(
		state => state.searchText
	);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={LandingPage}></Route>
					<Route path="/home" exact component={Home}></Route>
					<Route path="/bookdetail" exact component={SingleDetailView}></Route>
					<Route
						path="/explore"
						exact
						render={props => (
							<SearchResult
								searchText={exploreText}
								searchByAuthor={false}
								{...props}
							/>
						)}
					></Route>
					<Route
						path="/search"
						exact
						render={props => (
							<SearchResult
								searchText={searchText}
								searchByAuthor={true}
								{...props}
							/>
						)}
					></Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

import React from "react";
import { ReactComponent as GithubLogo } from "./github-logo.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-logo.svg";

const NavBar = () => {
	return (
		<div className="navBarWrapper">
			<div className="center">
       Experience 
			</div>
			<div className="end">
				<GithubLogo />
				<LinkedInLogo />
			</div>
		</div>
	);
};

const AboutMe = () => {
	return (
		<>
			<div>Hello,</div>
			<div>
          Im Esraa, Software Developer based in Tel Aviv.
			</div>
		</>
	);
};

const App = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<AboutMe/>
			</div>
		</div>
	);
};

export default App;

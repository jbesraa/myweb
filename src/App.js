import PropTypes from "prop-types";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ReactComponent as GithubLogo } from "./github-logo.svg";

const notify = () => toast.success("COPIED TO CLIPBOARD!", {
	position: "top-center",
});

const NavBar = () => {
	return (
		<div className="gridView cg1 gafc pa4">
			<div className="center pointer hover-green">
				<CopyToClipboard text="jbesraa@gmail.com"
					onCopy={notify}>
					<span>jbesraa@gmail.com</span>
				</CopyToClipboard>
			</div>
			<div className="center">
				<a target="_blank" href="https://github.com/jbesraa" rel="noopener noreferrer">
					<GithubLogo />
				</a>
			</div>
		</div>
	);
};

const CVTitle = ({text}) => {
	return <dt className="f6 b3 i">{text}</dt>;
};

const CVLine = ({text}) => {
	return <dd className="m10 f6 f5-m f4-l fw2">- {text}</dd>;
};

CVTitle.propTypes = {
	text: PropTypes.string.isRequired,
};

CVLine.propTypes = {
	text: PropTypes.string.isRequired,
};
const Jelly = [
	"Migrated C# server to Node.js + Graphql(MongoDB).", "Migrated Frontend HTTP infrastructure from Redux-Saga to Graphql(Apollo)",
	"Started End to End testing project for the company`s main web platform" ,
	"Started Backoffice project for buisness developmenet team.",
	"Coded new authentication system for users and employees." ,
	"Encouraged the team to follow data-driven decisions by analaysing and presenting data about users behaviour." ,
	"Moved old deploymenet to automated deployment process utilising Bitbucket pipelines." ,
	"Dockerized projects & Database setup.",
	"Speed optamaization for Database queries." ,
];

const Cedex = [
	"First Frontend developer in team." ,
	"Started several projects from scratch." ,
	"Developed tools for another devs to speed up the development process.",
	"Worked in microservices infrastructure." 
];

const ThinkBrick = [
	"Developed 3D Lego platform.",
	"Extensive work with Three.js and WebGL." ,
	"Utilized Redis for caching.",
	"Utilized S3(AWS) for storing files."
];

const IPCortex = [
	"Developed P2P video platform with WebRTC.",
	"Project implemented in Vanilla JS."
];

const BerkeleyHome = [
	"Developed hazards reporting platform for construction sites workers.",
	"Project implemented with React + Node."
];
const Experience = () => {
	return (
		<>	
			<Link to="/" className="link hover-orange black-70 center">
				{"$ cd /"}
			</Link>		
			<dl className="lh-title pa4 mt0 center">
				<CVTitle text="2018 - August 2020 GetJelly"/>
				{Jelly.map((t,i) => <CVLine key={i} text={t}/>)}
				<CVTitle text="2017 - 2018 Cedex" />
				{ Cedex.map((t,i) => <CVLine key={i} text={ t } />) }
				<CVTitle text="2016 - Contractor" />
				<CVTitle text="ThinkBrick - 6 months" />                   
				{ ThinkBrick.map((t, i) => <CVLine key={ i } text={ t } />) }
				<CVTitle text="IPCortex - 3 months" /> 
				{ IPCortex.map((t, i) => <CVLine key={ i } text={ t } />) }
				<CVTitle text="BerkeleyHome - 3 months" /> 
				{ BerkeleyHome.map((t, i) => <CVLine key={ i } text={ t } />) }
			</dl>
		</>
	);
};

const Intro = () => {
	return (
		<header className="tc ph4">
			<h1 className="f3 f2-m f1-l fw2 black-90 mv3">
    		Hello World
			</h1>
			<h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
  		Im Esraa, Software Developer based in Tel Aviv.
			</h2>
			<div className="w5 center">
				<h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy ">
  		  writing code for the last four years, 
        mainly in early-stage startups.
        During this period I developed web based platforms with React and Node.js,
        practiced different work and coding methodologies and got my head around
        alot of DevOps-y stuff.
				</h2>
			</div>
			<Link to="/resume" className="link">
				<h2 className="f6 hover-orange f4-m f4-l fw2 black-70 mt0 lh-copy">
		{"$ CAT RESUME"}
				</h2>
			</Link>
		</header>


	);
};

const App = () => {

	return (
		<Router>
			<NavBar  />
			<div className="gridView">
				<Switch>
					<Route exact path="/">
						<div></div>
					</Route>
					{/* <Route exact path="/">
						<Intro/>
					</Route>
					<Route exact path="/resume">
						<Experience/>
					</Route> */}
				</Switch>
				<ToastContainer/>
			</div>
		</Router>
	);
};

export default App;

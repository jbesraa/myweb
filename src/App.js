import React from "react";
import { ReactComponent as GithubLogo } from "./github-logo.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-logo.svg";

const NavBar = () => {
  return (
    <>
      <div>
        <GithubLogo />
      </div>
      <div>
        <LinkedInLogo />
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <div className="navBarWrapper">
        <NavBar />
      </div>
      <div className="container">
        <div>Hello</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default App;

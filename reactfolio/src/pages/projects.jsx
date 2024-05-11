import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";
import "./styles/about.css"; 

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="about-container">
						<div className="title projects-title">
							My Favorite Projects
						</div>

						<div className="subtitle projects-subtitle">
							Throughout CS projects at Brown, internships, and
							personal projects throughout my life, I am proud of 
							all the things I've built! Below are a few specific projects
							from a UI/UX class I took at Brown University, as well as
							a full-stack app I built with a few friends my freshman year.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;

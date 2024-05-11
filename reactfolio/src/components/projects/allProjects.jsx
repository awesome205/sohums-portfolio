import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

import MediaCard from "./projectcard";

const projects = [
	{
		title: "Responsive Web Redesign",
		description:
			"Redesigning a 20-year-old website which maintains crucial diving records for Ireland and shipwrecks around the Island.",
		logo: require("./wreck.jpg"),
		linkText: "View Project",
		link: "/project1",
	},

	{
		title: "Partiful Redesign Project",
		description:
			"Worked with the YC-backed Partiful team to redesign their homepage to help improve engagement in past events.",
		logo: require("../../pages/partifulpic.png"),
		linkText: "View Project",
		link: "/project2",
	},

	{
		title: "MonsterNotify Apps",
		description:
			"MonsterNotify is a Wix App which delivers Wix store notifications to Slack, Teams, and Discord.",
		logo: require("../../pages/monsternotifyicon-01.png"),
		linkText: "View Project",
		link: "/project3",
	},
];

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<MediaCard
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;

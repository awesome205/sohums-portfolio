import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									I'm Sohum Sanu, an ambitious and curious
									product manager
								</div>

								<div className="subtitle about-subtitle">
									I've worked on a variety of projects over
									the years and I'm proud of the progress I've
									made. I'm also proud to be the co-president
									of Brown University's Entrepreneurship
									Program. I work closely with our
									administration to support the founders
									around campus.
									<br></br>
									Outside of the professional realm, I also
									have a lot of interests. I love to sing and
									play guitar and am in a Indie-Funk-Pop band
									at Brown. I also love to run, play
									pickleball, and will always go
									dessert-hunting.
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={require("./IMG_9026.jpg")}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
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

export default About;

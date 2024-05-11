import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Contact Me :)
						</div>

						<div className="subtitle contact-subtitle">
							Please email me at {" "}
							<a href={`mailto:sohum_sanu@brown.edu`}>
								sohum_sanu@brown.edu
							</a>
							{" "}
							to chat. I try to respond to all messages within 24 hours.
							You rock! Thanks for checking out my website.
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

export default Contact;

import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "./styles/projects.css";

export default function Project1() {
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

					<div className="project-container">
						<div>
							<h2>Responsive Redesign Project</h2>
							<h2 class="subtitle">
								Going through the design process with a website
								of your choice
							</h2>
						</div>
						<div class="titles">
							<div>
								<h5>Role</h5>
								<p>UX Designer</p>
							</div>
							<div>
								<h5>Timeline</h5>
								<p>March 2024 - March 2024</p>
							</div>
							<div>
								<h5>Team</h5>
								<p>Sohum Sanu</p>
							</div>
							<div>
								<h5>Skills</h5>
								<span class="badge proj-label">
									UI/UX Design
								</span>
								<span class="badge proj-label">Web App</span>
							</div>
						</div>
						<img
							className="imgphoto"
							src={require("./redesignphoto.png")}
							alt="project"
						/>
						<p className="para1">
							Figure 1: Website Redesign Homepage
						</p>

						<div>
							<h3>Overview</h3>
							<p>
								I decided to redesign the website{" "}
								<a
									href="http://irishwrecksonline.net/"
									IrishWrecksOnline
								/>
								for my CS 1300 class. The website is a database
								of shipwrecks off the coast of Ireland. The
								website is a bit outdated and could use a modern
								touch. The website was also not very
								user-friendly. It was hard to navigate to
								specific information and the search
								functionality was hidden and lacking.
							</p>
						</div>
						<div className="problem">
							<div>
								<h3>Problem</h3>
								<p>
									Websites like these are maintained without
									commercial interest and by volunteers who
									are not professional web developers. In
									addition, keeping track of dived shipwrecks
									is crucial for understanding historical
									records, ocean conservation, and maritime
									safety. The website has a lot of usability
									issues, including a{" "}
									<strong>
										{" "}
										lack of alt text, poor color contrast,
										and a lack of mobile responsiveness.
									</strong>{" "}
									The design also dated and there are a lot of
									creative ways that this information can be
									presented. Second, the website's design is
									simple but unintuitive so I believe I can
									significantly improve the user experience.
								</p>
							</div>
							<div>
								<h3>Objective</h3>
								<p>
									Our overall objective was to redesign the
									website to make it highly usable and
									intuitive for users while also making it
									aesthetically pleasing.
								</p>
							</div>
						</div>
						<div>
							<img
								className="imgphoto"
								src={require("./irishshipwreck2.png")}
								alt="project"
							/>
							<p className="para1">
								Figure 2: Website before the redesign
							</p>
						</div>
						<div>
							<h2>Process</h2>
							<h3>Goal 0: Preparation</h3>
							<p>
								The current structure of the homepage features a
								table, a map, and a small search bar in the end.
								Through iterations and traffic analysis, I found
								that the search and the map features were the
								two most important aspects to highlight. I
								iterated through many different design ideas for
								the homepage including an only map view, an only
								table view, but ended up settling on a large
								hero image with a search bar. I believed this
								would be the most effective as it entices the
								user and allows them to search for exactly the
								information they need for. People who use this
								website, are usually looking for something
								specific rather than browsing the archives in
								general. With these things in mind, I decided to
								create a few sketches to get a better idea of
								what I wanted to do.
							</p>
							<img
								className="imgphoto"
								src={require("./speedsketch.jpg")}
								alt="project"
							/>
							<p className="para1">
								Figure 3: 9 Speed Sketches of the Redesign
							</p>
							<img
								className="imgphoto"
								src={require("./finalsketch.jpg")}
								alt="project"
							/>
							<p className="para1">
								Figure 4: Website Map Redesign
							</p>
							<h3>Goal 1: Homepage Redesign</h3>
							<p>
								After many iterations, we decided to confirm the
								idea of having a "search-bar first" design. This
								design would allow users to search for specific
								shipwrecks and information. The search bar would
								be the first thing users see when they visit the
								website.
							</p>
							<img
								className="imgphoto"
								src={require("./redesignphoto.png")}
								alt="project"
							/>
							<p className="para1">
								Figure 5: Final Website Homepage Sketch
							</p>
							<h3>Goal 2: Map Redesign</h3>
							<p>
								After critical thought and
								interation——unfortunately, I couldn't find a an
								individual who used the website——I decided that
								map interactiveness was paramount. On the
								current website, it's unclear whether you can
								click on the map, or if diffent parts of the map
								will take you different places. It seems like a
								static image. In addition, user's cannot
								interact or zoom into the map at all. Therefore,
								I decided to embed the Google Maps API into the
								website. Someone with domain knowledge, could
								easily go in and mark the shipwrecks as points
								of interest.
							</p>
							<img
								className="imgphoto"
								src={require("./irishmapss.png")}
								alt="project"
							/>
							<p className="para1">
								Figure 6: Website Map Redesign
							</p>
							<h3>Goal 3: Table Redesign</h3>
							<p>
								Finally, the last important piece of the website
								was the table. The table had 10 categories, and
								it was clear that some belonged together and
								some did not. Some categories in the table were
								much higher use and traffic. I took those
								categories and placed them into cards so they
								can be highlighted with a description. The less
								important table entries were moved to the
								footer. These decisions were explicitly made to
								give less information to the user so they can
								focus on the most important information, similar
								to Norman's idea of constraints.
							</p>
							<img
								className="imgphoto"
								src={require("./finalfooter.png")}
								alt="project"
							/>
							<p className="para1">
								Figure 7: Website Redesign Cards & Footer
							</p>
							<h3>Goal 4: Visual Design</h3>
							<p>
								While building this redesign, I also created a style guide so future designers
                                can use the same components and color pallet when designing. I explicitly
                                selected a color pallet that was accessible and had a high contrast. I also
                                selected a font that was easy to read and had a high contrast. Overall, this
                                style guide helps meet accessibility standards and makes the website more
                                usable for everyone.
							</p>
							<img
								className="imgphoto"
								src={require("./StyleGuide.png")}
								alt="project"
							/>
							<p className="para1">
								Figure 8: Visual Style Guide
							</p>
						</div>
                        <div>
                            <h2>Takeaways</h2>
                            <h3>1. Find Other Metrics to Supplement User Interviews </h3>
                            <p>
                                This project was much more challenging to redesign as there were no users who could be interviewed for this process. Therefore, I did not have a firm understanding of who I was designing for. However, I was able to supplement this with traffic analysis and domain knowledge. I was able to see what users were searching for and what they were clicking on. Overall, I realized that there is  other data available to designers to inform decisions.
                            </p>
                            <h3>2. Start Early</h3>
                            <p>
                                Design iterations take time. While I brainstormed a significant portion during the sketching session, I came up with more ideas during the lo-fi stage in the decision process. This slowed things down and distracted from the overall goal. Therefore, I learned that I need to start early and iterate quickly to get to the final design faster.
                            </p>
                            <h3>3. Build Small Visual Guide for All Projects </h3>
                                I realized that most projects I work on don't have a visual style guide. Even if the project is small, it's important to have a visual style guide so you can easily reference the colors or components you need. In addition, it makes it much easier for someone else to pick up your work. Therefore, I hope to start doing this in all future design projects. 
                            <p>
                            </p>
                        </div>
                        <p>Thanks so much for reading. If you're interested in chatting about my work or experience, please <a href="/contact">reach out!</a> </p>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

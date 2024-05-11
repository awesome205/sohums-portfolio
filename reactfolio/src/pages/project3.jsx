import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "./styles/projects.css";

export default function Project3() {
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
							<h2>MonsterNotify</h2>
							<h2 class="subtitle">
								Built a high-performing Wix App that delivers
								Wix store notifications to Slack, Teams, and
								Discord
							</h2>
						</div>
						<div class="titles">
							<div>
								<h5>Role</h5>
								<p>Product Manager</p>
							</div>
							<div>
								<h5>Timeline</h5>
								<p>June 2022 - August 2023</p>
							</div>
							<div>
								<h5>Team</h5>
								<p>Sohum Sanu & Arnav Chawla</p>
							</div>
							<div>
								<h5>Skills</h5>
								<span class="badge proj-label">
									Product Management
								</span>
								<span class="badge proj-label">Figma</span>
								<span class="badge proj-label">React</span>
								<span class="badge proj-label">
									Full Stack Development
								</span>
							</div>
						</div>
						<img
							className="imgphoto monster"
							src={require("./monsternotifyicon-01.png")}
							alt="project"
						/>
						<p className="para1">
							Figure 1: Default Partiful Background
						</p>

						<div>
							<h3>Overview</h3>
							<p>
								Many e-commerce store owners need a way to
								communicate with their team members about store
								updates. Unfortunately, e-commerce platforms
								like Wix or Shopify do not have a built-in way
								to connect with a notification platform.
								<br></br>
								Out of this need came MonsterNotify, a Wix App
								that delivers Wix store notifications to Slack,
								Teams, and Discord. This application was built
								in the summer of 2022 by a team of two people,
								Arnav Chawla and myself. I was the co-founder,
								product manager, and a primary developer on the
								project. We used React and Tailwind for the
								frontend Python, Django for the backend.
							</p>
						</div>
						<div>
							<h3>Problem Statement</h3>
							<p>
								How can we make it easier for e-commerce store
								owners to communicate with their team members
								about store updates?
							</p>
						</div>
						<div>
							<h3>Bullseye Customer Description</h3>
							<ul>
								<li> E-Commerce Store Owners Using Wix</li>
								<li>
									{" "}
									Teams of two or more, who use Slack, Teams,
									or Discord to communicate
								</li>
								<li>
									Store Owners who want an automated way to
									track their orders, refunds, or other store
									updates
								</li>
							</ul>
						</div>
						<div>
							<h3>Customer Pain Points</h3>
							<ul>
								<li>
									As a store owner, it's difficult to notify
									the team when an order comes in. They have
									to set up a manual notification system every
									time this happens.
								</li>
								<li>
									If the fulfillment process is not built into
									Wix, then store owners have to create manual
									systems to tell their team exactly what to
									fulfill.
								</li>
								<li>
									Store owners have to manually track refunds
									and other requests that come in. Usually
									this is all sent through email or text,
									which can be hard to track.
								</li>
							</ul>
						</div>
						<div>
							<h3>Success Metrics</h3>
							<ul>
								<li>Installs on the Application</li>
								<li>
									User engagement with the app (number of
									notifications sent, number of notifications
									enabled)
								</li>
								<li>
									Users emailing or requesting for more
									features
								</li>
							</ul>
						</div>

						<div>
							<h2>Research</h2>
							<h3>Step 0: Customer Research</h3>
							<p>
								As a past e-commerce store owner, I had some
								background in the problem space. However, with
								all new features, it's crucial to talk to users
								to determine if there is a strong need for the
								product. I conducted 10 interviews with
								e-commerce store owners who used Wix. I asked
								them about their current notification systems,
								how they communicated with their teams, and what
								they would like to see in a new notification
								system. We received lots of feedback that Wix
								was not very user-friendly and that they would
								like to see a more automated system.
							</p>

							<h3>Step 1: Ideation</h3>
							<p>
								After our customer research phase, I led our
								team through an ideation phase on solving the
								problem. Should we provide a solution similar to
								Zapier or IFFFT? Should we build a custom
								notification system? What's the best way we can
								serve this customer? Next, we asked questions
								about the development timeline and feasibility
								of the project. Finally we decided that the
								development timeline for this app is very short.
								So we can launch this app for free and we can
								learn about the e-commerce app space through
								this. Then, once we understand the segment
								better, we can charge for the app. Or we can
								work on building a different app.
							</p>

							<h3>Step 2: Lo Fi Designs</h3>
							<p>
								We deliberated through a few ideas for the app.
								We decided to build a simple app that would be
								fasted for the developers to implement. We aimed
								to launch and build the MVP as soon as possible
								so we could learn from our users.
							</p>
							<div className="monsterpic">
								<img
									src={require("./mnotifycreative4-01.png")}
									alt="project"
								/>
								<img
									src={require("./monstercreative2-01.png")}
									alt="project"
								/>
							</div>
							<p className="para1">
								Figure 2: Initial Designs for MonsterNotify
							</p>
							<h3>Customer Feedback & Iteration</h3>
							<p>
								Our team built this app within one week. We
								launched the app on the Wix App Store a month
								later after an extensive testing period from
								Wix. This process didn't require any code
								testing, but mainly due to legal data protection
								requirements and ensuring all the documents were
								set up correctly.
								<br></br>
								After the app launch, we received 100 users in
								the first month and were featured on Wix's App
								of the Month for a few months. We received
								feedback from users that they wanted more
								customization options for the notifications. We
								also received feedback that users wanted to be
								able to send notifications to multiple channels
								at once. Through reviewing HeatMaps from
								FullStory, we were able to see where users
								dropped off and stop using the app. We validated
								our app idea, but realized the design of our app
								was clunky. So, we decided to redesign the app
								again.
							</p>
						</div>
						<div>
							<h2>Final Designs</h2>
							<p>
								Once again, we wanted to prioritize time, as we
								wanted to capitalize on the new users who are
								joining the app. We were gaining traction fast,
								so we wanted to go went through the ideation
								phase quickly. We used a platform called V0 to
								ideate and develop at the same time. V0 is an AI
								platform that helps you design and build apps
								quickly. We used this platform to build our app
								and it was very successful.
							</p>
							<div className="monsterpic">
								<img
									src={require("./FinalCreative1.png")}
									alt="project"
								/>
								<img
									src={require("./FinalCreative3.png")}
									alt="project"
								/>
							</div>
							<p className="para1">
								Figure 5: Basic Hi-Fi Designs
							</p>

							<h3>Results</h3>
							<p>
								Since we launched the app in late 2022 Summer,
								MonsterNotify has had over 1000 installs and has
								been featured on Wix's App of the Month. We have
								received feedback from users that they love the
								app and that it has saved them time. We have
								also received feedback that users want more
								customization options for the notifications. We
								are currently working on building out these
								features. We currently have over 550+ daily
								active users on the app.
							</p>
						</div>
						<div>
							<h2>My Role</h2>
							<p>
								As a product manager and developer, I had a
								large role in building out the project. I worked
								to manage the ideation and business side of our
								processes. In addition, I managed the developer
								on our team to keep track and prioritize what to
								build. Finally, I also built out the entire
								front-end of our new application.
							</p>
						</div>
						<div>
							<h2>Takeaways</h2>
							<h3> 1. Have an ambitious but flexible timeline</h3>
							<p>
								It's important to have an ambitious timeline so
								you can push your team to meet certain goals and
								get things done. However, it's also important to
								be flexible and understand that things may not
								always go as planned. We had to push our
								timeline back a few times because we
								underestimated the complexity of the project. In
								addition, the Wix review process took us much
								longer than we wanted. Therefore, it's important
								to be flexible and be able to adapt your
								timeline to new information.
							</p>
							<h3>
								2. Understand your teams strengths & weaknesses
							</h3>
							<p>
								Each person on the team can contribute something
								unique and is more efficient doing a particular
								task. Since startups are dynamic and move so
								fast, it's important that we understand
								everyone's 'best impact.' For example, we
								learned over time that I was able to tackle
								front end bugs much faster than my other
								developer while he was able to understand
								backend bugs in a fraction of the time it took
								me.
							</p>
							<h3>3. Validate User Feedback</h3>
							<p>
								Usually when building products user feedback is
								prized. However, even when you get user feedback
								it's important to conduct more interviews or
								surveys to validate that feedback. One user's
								feature request may not be applicable to
								everyone. Therefore, you must be careful before
								spending developer time on a new feature.
							</p>
						</div>
						<p>
							Thanks so much for reading. If you're interested in
							chatting about my work or experience, please{" "}
							<a href="/contact">reach out!</a>{" "}
						</p>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

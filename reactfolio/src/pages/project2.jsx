import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "./styles/projects.css";

export default function Project2() {
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
							<h2>Partiful Homepage Redesign</h2>
							<h2 class="subtitle">
								Work through a design problem with a YC startup.
							</h2>
						</div>
						<div class="titles">
							<div>
								<h5>Role</h5>
								<p>UX Designer</p>
							</div>
							<div>
								<h5>Timeline</h5>
								<p>April 2024 - April 2024</p>
							</div>
							<div>
								<h5>Team</h5>
								<p>
									Ivery Chen, Viviana Wei, Sohum Sanu, David
									Song
								</p>
							</div>
							<div>
								<h5>Skills</h5>
								<span class="badge proj-label">
									UI/UX Design
								</span>
								<span class="badge proj-label">Figma</span>
								<span class="badge proj-label">
									User Research
								</span>
							</div>
						</div>
						<img
							className="imgphoto partiful"
							src={require("./partifulpic.png")}
							alt="project"
						/>
						<p className="para1">
							Figure 1: Default Partiful Background
						</p>

						<div>
							<h3>Overview</h3>
							<p>
								This project was part of CS 1300 UI/UX at Brown
								University. The point of this project was to
								replicate a common situation faced by designers
								in industry: designing a solution based on a
								client request. Our team chose a design problem
								from a YC startup and completed the entire
								iterative design process. Our client was{" "}
								<a href="https://partiful.com/events">
									Partiful.
								</a>{" "}
								Partiful is a website and app that allows users
								to create delightful event pages for birthdays,
								hangouts, and everything in between. Hosts can
								invite friends and friends-of-friends when they
								don't have a phone number or socials. Event
								pages build hype around the party, allowing
								guests and hosts to interact with each other.
								The company focuses on simplifying the
								cultivation of real-world friendships.
							</p>
						</div>
						<div className="problem">
							<div>
								<h3>Problem Statement</h3>
								<p>
									How might we make it easier for hosts and
									guests to navigate to their past events?
								</p>
							</div>
						</div>
						<div>
							<h3>Bullseye Customer Description</h3>
							<ul>
								<li> Gen Z + Millennials</li>
								<li>
									{" "}
									The primary party guest + host in their
									social groups
								</li>
								<li>
									Example event: Greek events, campus club
									events, birthdays
								</li>
								<li>
									Hyper-social and always wanting to meet and
									connect with new friends
								</li>
							</ul>
						</div>
						<div>
							<h3>Customer Pain Points</h3>
							<ul>
								<li>
									As a host, it’s difficult to navigate back
									to a past event to reminisce or utilize
									helpful Partiful features like Text Blast
								</li>
								<li>
									As a guest, it’s difficult to navigate back
									to a past event to reminisce, ask for
									photos, or view already posted photos
								</li>
								<li>
									People want to ask for photos from the event
									and hosts don’t want this to be a heavy lift
								</li>
								<li>
									It’s difficult to find the people you
									recently partied with to either look them up
									on another platform (Instagram) or ask
									friends about them
								</li>
							</ul>
						</div>
						<div>
							<h3>Success Metrics</h3>
							<ul>
								<li>More users navigating to past events</li>
								<li>
									More activity (comments, comment replies,
									photos) on past events
								</li>
								<li>
									Users connecting with one another from past
									events
								</li>
							</ul>
						</div>

						<div>
							<h2>Research</h2>
							<h3>
								Step 0: Clarifying Questions & Customer Research
							</h3>
							<p>
								Our team made sure to clarify all the underlying
								goals that Partiful had so we can tailor our
								designs to deliver the best results. One of our
								team members also interviewed members in Brown
								University to get a better understanding of how
								they use Partiful and how they host events. We
								found that most people don't navigate back to
								the Partiful website for for past events,
								validating our initial problem statement. From
								here, we began brainstorming initial sketches.
							</p>

							<h3>Step 1: Sketching</h3>
							<p>
								Partiful wanted our team to ideate a wide range
								of potential ideas for their homepage. The new
								homepage should emphasize past events so users
								have an easier time navigating back to them.
								Below are two initial sketches I made.
							</p>
							<img
								className="imgphoto"
								src={require("./sohum1.jpg")}
								alt="project"
							/>
							<p className="para1">
								Figure 2: Sohum's First Homepage Sketch
							</p>
							<img
								className="imgphoto"
								src={require("./sohum3.jpg")}
								alt="project"
							/>
							<p className="para1">
								Figure 3: Sohum's Second Homepage Sketch
							</p>
							<h3>Step 2: Lo Fi Designs</h3>
							<p>
								After sketching, we deliberated and picked one
								idea that was very feasible (in terms of
								engineering house) and another idea which was
								much more creative. We then created lo-fi
								designs with those. Initially, past events were
								not immediately visible on the events landing
								page, which featured five primary filters: Open
								Invite, Upcoming, Hosting, Attended, and Past
								Events. To enhance visibility and usability, we
								restructured the landing page into two main
								sections: Upcoming and Past Events. We also
								integrated a search bar at the top to facilitate
								quick event searches. For the Upcoming Events
								section, we eliminated the redundant 'Add Event'
								button, given its presence in the navigation
								bar. We tailored the display to accommodate
								various user scenarios: if a user has no
								upcoming events, this area showcases Open
								Invites, ensuring the page remains populated.
								For users with multiple upcoming events, these
								can be browsed horizontally, seamlessly
								transitioning into Open Invites at the end of
								the list. Below this, we introduced a feature
								showing mutual contacts, denoted by fire emojis
								and numbers to indicate the count of shared
								events with each user. The design allows for
								horizontal scrolling through Upcoming Events and
								vertical scrolling through Past Events,
								optimizing space utilization on mobile devices.
							</p>
							<div className="lofi">
								<img
									src={require("./Profile.png")}
									alt="project"
								/>
								<img
									src={require("./welcome.png")}
									alt="project"
								/>
								<img
									src={require("./Events_host.png")}
									alt="project"
								/>
								<img
									src={require("./Events_guest.png")}
									alt="project"
								/>
							</div>
							<p className="para1">
								Figure 4: Our Team's Lo-Fi Designs
							</p>
							<h3>Step 3: LoFi Feedback</h3>
							<p>
								Our team recorded and delieverd a 5 min Loom
								presentation to our Point of Contact, here's the{" "}
								<a href="">link.</a>
								<br></br>
								The feedback we received was that the design was
								as follows. In the current Event page, past
								events are not visible on the first view, making
								it harder for users to find and spend time on
								the page. Our design displays past events on
								first sight, which was positive. However, our
								team was running into "scope creep" as we were
								designing many frames that were not necessary.
								We started designing a new mutuals page and new
								profile page, which was not part of the original
								problem statement. Therefore, we decided to
								refocus on the original problem statement.
							</p>
						</div>
						<div>
							<h2>Final Designs</h2>
							<p>
								We developed three redesigned concepts for
								Partiful's main events page. The first design
								displays upcoming, mutual and past events with
								scrollable sections. The second design mimics a
								social media feed anc shows notifications which
								participants can select. The third design is an
								interactive map that represents upcoming and
								past events.{" "}
							</p>
							<h3>Design 1: Scrollable Main Page</h3>
							<p>
								The first design is similar to the lo-fi that we
								presented last week. We have upcoming, mutual
								and past events as three sections. We moved past
								events to the front page so it’s shown at first
								sight. In the case that there are upcoming
								events, Upcoming can be scrolled horizontally
								and past events can be scrolled vertically with
								infinite scrolling. The base case is covered so
								that if there are no upcoming events, then this
								slot will be replaced by an open invite event
								indicated by the dotted container. In the case
								of there are no upcoming events or open invite
								events, this space will be filled with an add
								event button.
							</p>
							<div className="lofi">
								<img
									src={require("./basic-hifi.png")}
									alt="project"
								/>
								<img
									src={require("./basic-hifi-1.png")}
									alt="project"
								/>
								<img
									src={require("./basic-hifi-2.png")}
									alt="project"
								/>
							</div>
							<p className="para1">
								Figure 5: Basic Hi-Fi Designs
							</p>
							<h3>Design 2: Social Feed</h3>
							<p>
								The second design is inspired by social media
								feeds, because we know that Partiful intends on
								becoming more of a social media platform. For
								each host, past events and upcoming, we have
								notifications. If a user uploads an image then a
								notification would pop up for past events. If a
								party guest RSVPs then a host would see a
								notification for that page. You can scroll down
								and look at all of the notifications and also
								press show less to collapse them. The rationale
								behind is that It prompts users to revisit a
								past event to look at updates.
							</p>
							<div className="lofi">
								<img
									src={require("./Ver2.png")}
									alt="project"
								/>
								<img
									src={require("./Ver2Past.png")}
									alt="project"
								/>
								<img
									src={require("./Ver2_expandedPast.png")}
									alt="project"
								/>
							</div>

							<p className="para1">
								Figure 6: Social Feed Hi-Fi Designs
							</p>
							<h3>Design 3: Map Page</h3>
							<p>
								Our third design, map, is inspired by snap maps.
								The idea is that when you open the app you will
								see upcoming events and exactly where they are
								located. Next to each event, location, time and
								attend status are also shown. Similarly, if the
								user navigates into the past events tab, they
								can also keep track of where they have been. We
								wanted to implement past events like a heat map
								so users can also see where the party super
								hosts are and where the hottest activities are
								located nearby.
							</p>
							<div className="lofi hifi1">
								<img
									src={require("./map-design.png")}
									alt="project"
								/>
								<img
									src={require("./map-design-past.png")}
									alt="project"
								/>
							</div>

							<p className="para1">
								Figure 7: Map Page Hi-Fi Designs
							</p>
							<h3>Partiful Style Guide</h3>
							<p>
								The team received a style guide from Partiful
								which included a DropBox folder with fonts and
								Figma mockups of their homepage, settings,
								profile, and event page customization. Partiful
								designed their style guide with their ethos in
								mind “fun,” “creative” and “exciting” for the
								user. This is demonstrated by their font choices
								of Syne and TWK Lausanne Pan Family which evoke
								a sense of professionalism coupled with elation.
								Partiful also designed their color scheme around
								light blue, purple, and pink. The light blue and
								pink are high energy colors which drive a sense
								of enthusiasm when using the app. Purple as a
								tertiary color suggests mystery and a feeling of
								wonder. The Partiful style guide was focused
								more on the fonts and actual design assets of
								their IOS app. We created a new style guide
								which highlights the fonts, colors, and a few
								design elements (buttons, filters, and event
								labels). All three versions of the high-fidelity
								design adhere to the WCAG AA accessibility
								guidelines. To ensure optimal contrast between
								text and backgrounds, we primarily used white
								and light gray for our text colors. We also made
								use of shadow effects and grouped UI cards to
								optimize page organization. Additionally,
								following the existing design system from
								Partiful, we incorporated emojis and symbols in
								addition to information to enhance the
								accessibility and readability of each component.
								Most of the interaction designs followed
								standard mobile interaction gestures, such as
								horizontal and vertical scrolling and pressing
								on an item card.
							</p>
							<img
								className="imgphoto"
								src={require("./partifulstyleguide.png")}
								alt="project"
							/>
							<p className="para1">
								Figure 8: Partiful Style Guide
							</p>
						</div>
						<div>
							<h2>My Role</h2>
							<p>
								As a UX designer, I was responsible for creating
								one of the Sketches, the Lo-Fi Designs, and the
								Hi-Fi Designs. I also created the Partiful Style
								Guide. I played a fundamental role in developing
								our third map idea. I thought of the idea of a
								map page from Apple photos and Snapchat Maps,
								both of which were very successful. I also
								helped coordinate our meeting rooms and
								deliverables for our final presentation and
								ensured that our team was prepared.
							</p>
						</div>
						<div>
							<h2>Takeaways</h2>
							<h3>1. Clarify Expectations & Objectives</h3>
							<p>
								Our team initially thought that we had asked
								many clarifying questions and we understood
								everything that was asked of us. However, we
								realized that there was still a communication
								gap and we were not delivering what the client
								wanted. Therefore, it is fundamental to clarify
								all expectations and understand the exact scope
								of work.
							</p>
							<h3>2. Define clear team roles and expectations</h3>
							<p>
								We had a few miscommunications in our team about
								who was responsible for what. We had a few
								designs that were overlapping and we were
								wasting precious resources that could've been
								devoted to finding new ideas. In addition, a few
								people — including myself — did not meet certain
								deadlines. Therefore, transparent and clear
								communication is key to a successful project.
							</p>
							<h3>
								3. Push the status quo further than you think
							</h3>
							<p>
								Our team was very conservative in our designs.
								We didn't want to push the status quo too far
								because we were afraid of scope creep. However,
								we realized that we could've pushed the status
								quo further during initially ideation phases.
								Teams also have the tendency to rush through
								ideation phases, but it is important to take
								your time to be creative to deliver high-quality
								projects.
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

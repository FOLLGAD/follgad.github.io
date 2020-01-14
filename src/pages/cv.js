import React from "react"
import Experience from "../components/experience"
import ExperienceList from "../components/experience-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"

const IndexPage = () => (
	<Layout>
		<SEO />

		<div className="flex">
			<div className="flex-1 px-4">
				<div className="text-3xl text-gray-700 mb-3 inline-block">Emil Ahlbäck</div>

				<div className="mb-3 float-right text-right">
					<Info right>
						<a href="https://follgad.github.io">https://follgad.github.io</a>
					</Info>
					<Info icon="cil-location-pin" right>
						Stockholm, Sweden
					</Info>
					<Info icon="cil-phone" right>
						070-491 17 76
					</Info>
					<Info icon="cil-envelope-closed" right>
						<a href="mailto:ahlbac.emil@gmail.com">ahlback.emil@gmail.com</a>
					</Info>
					<Info icon="cib-github" right>
						<a href="https://github.com/follgad">github.com/follgad</a>
					</Info>
				</div>

				<p>
					I'm a developer with an entrepreneurial spirit.
					I've been doing professional web development since 2016.
					Several projects which I've built are still running in production.
					I love problem-solving and working with whatever
					tool fits the current task at hand.
				</p>
			</div>
		</div>

		<div className="flex flex-wrap">
			<div className="flex-1 px-4">
				<ExperienceList name="Experience">
					<Experience
						mainTitle="Redditors"
						subTitle="Lead Developer, Channel Manager"
						from="2019"
						to="2019"
						tags={["ffmpeg", "react", "redux", "mongodb"]}
					>
						<p>
							As the co-owner of a medium-sized Youtube channel.
							We wanted a way to cut down the time required per-video,
							so we developed software to automate the video-rendering
							process using the tool ffmpeg. We also wrote a frontend UI
							to facilitate the process further.
						</p>
					</Experience>
					<Experience
						mainTitle="TenFAST — Estate Management"
						subTitle="Co-founder, Developer"
						from="2018"
						link="https://tenfast.se"
						tags={["mongodb", "vue", "nuxt.js", "unit testing", "stripe"]}
					>
						<p>
							An estate management service we started working on in 2018
							with several active customers.
							It's the largest project I've worked on so far.
							The front-end interface is written in Nuxt.js,
							and the backend in Node.js and Mongoose.
						</p>
					</Experience>
					<Experience
						mainTitle="Tentium AB"
						subTitle="Co-founder, Consulting"
						from="2018"
						tags={["web dev"]}
					>
						<p>
							In Tentium, which I co-founded, we build software for clients,
							mostly full-stack web applications and websites,
							with the occasional graphical design.
						</p>
					</Experience>
					<Experience
						mainTitle="Sjukvårdskonsulterna"
						subTitle="Developer"
						from="2016"
						to="2017"
						tags={["mongodb", "jquery", "keystonejs", "react-native"]}
					>
						<p>
							Sjukvårdskonsulterna is a consulting firm in the healthcare sector.
							We developed their entire web system from scratch.
							It's currently being used for many of
							the daily tasks of both management and the consultants,
							including time-tracking, sending announcements and publishing assignments.
							The project is written in Node.js using KeystoneJS.
						</p>
					</Experience>
					<Experience
						mainTitle="Inventory Management Tool for ABB"
						subTitle=""
						from="Spring 2017"
						to="Spring 2017"
						tags={["react-native"]}
					>
						<p>
							This was a project for school, where we developed an app
							in React Native with the capacity of scanning QR codes
							and displaying related information from a database.
							As a companion to this app we developed a web app for
							searching and entering new data into the database.
						</p>
					</Experience>
				</ExperienceList>
			</div>
			<div className="flex-1 px-2">
				<ExperienceList name="Education">
					<Experience
						mainTitle="Computer Science, Royal Institute of Technology"
						subTitle="Stockholm, Sweden"
						from="2018"
					/>
					<Experience
						mainTitle="ABB Industrigymnasium, Technology Programme"
						subTitle="Västerås, Sweden"
						from="2015"
						to="2018"
					/>
				</ExperienceList>
				<ExperienceList name="Projects">
					<Experience
						mainTitle="Bemi is You"
						from="2019"
						to="2019"
						link="https://github.com/FOLLGAD/bemi-is-you"
						tags={["go", "pixi.js", "websockets"]}
					>
						<p>
							An online multiplayer puzzle game, inspired by the game "Baba is You".
							The backend was fully written in Go, using WebSockets for communication with the clients.
						</p>
					</Experience>
					<Experience
						mainTitle="Isle of Khan"
						from="2016"
						to="2016"
						link="https://github.com/FOLLGAD/isle-of-khan"
					>
						<p>
							An online multiplayer top-down shooter game. The first thing I ever made with Javascript.
						</p>
					</Experience>
					{/* <Experience
						mainTitle="Bemilanche"
						from="2017"
						to="2017"
						link="https://github.com/FOLLGAD/bemilanche"
					>
						<p>
							A multiplayer arcade game based on jumping on falling blocks and avoiding death.
							The game was written from scratch in vanilla javascript.
						</p>
					</Experience> */}
				</ExperienceList>
				<ExperienceList name="Skills">
					<Experience
						mainTitle="Javascript"
						subTitle="I know my way around all aspects of the Javascript ecosystem" />
					<Experience
						mainTitle="Web Development"
						subTitle="I've developed and designed many websites and web apps" />
					<Experience
						mainTitle="React + Redux"
						subTitle="I've used React and Redux in multiple projects" />
					<Experience
						mainTitle="MongoDB"
						subTitle="I've done extensive work using MongoDB" />
					<Experience
						mainTitle="Linux"
						subTitle="Since a year back I've used linux for all my computers" />
					<Experience
						mainTitle="Functional Programming"
						subTitle="I've dabbled with Haskell and frequently make use of functional approaches when coding" />
				</ExperienceList>
				<ExperienceList name="Languages">
					<Experience
						mainTitle="Swedish"
						subTitle="Native" />
					<Experience
						mainTitle="English"
						subTitle="Full Fluency" />
					<Experience
						mainTitle="Spanish"
						subTitle="Intermediate" />
				</ExperienceList>
			</div>
		</div>
	</Layout>
)

export default IndexPage

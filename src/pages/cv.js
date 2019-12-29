import React from "react"
import Experience from "../components/experience"
import ExperienceList from "../components/experience-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"

const IndexPage = () => (
	<Layout>
		<SEO title="CV" />

		<div className="flex">
			<div className="flex-1 px-2">
				<div className="flex justify-between items-center mb-3">
					<h1 className="text-3xl text-gray-700">Emil Ahlbäck</h1>
					<div><a href="https://follgad.github.io">https://follgad.github.io</a></div>
				</div>

				<div className="mb-3">
					<Info icon="cil-location-pin">
						Stockholm, Sweden
					</Info>
					<Info icon="cil-phone">
						070-491 17 76
					</Info>
					<Info icon="cib-github">
						github.com/follgad
					</Info>
				</div>

				<p>
					I'm a developer with an entrepreneural spirit.
					I've been doing professional web development since 2016.
				</p>
				<p className="mt-2">
					Best skills: Full-stack development, Linux, Node.js, Go
				</p>
			</div>
		</div>

		<div className="flex flex-wrap">
			<div className="flex-1 px-2">
				<ExperienceList name="Experience">
					<Experience
						mainTitle="Redditors"
						subTitle="Lead Developer, Channel Manager"
						from="2019"
						to="2019"
						tags={["ffmpeg", "react", "mongodb"]}
					>
						<p>
							I developed software to automate the video-rendering
							process and cut the time required per video by over 90%.
							I also helped manage the channel.
						</p>
					</Experience>
					<Experience
						mainTitle="TenFAST — Estate Management"
						subTitle="Co-founder, Developer"
						from="2018"
						link="https://tenfast.se"
						tags={["mongodb", "vue", "unit testing", "stripe"]}
					>
						<p>
							An estate management service we started working on in 2018.
						</p>
					</Experience>
					<Experience
						mainTitle="Tentium AB"
						subTitle="Co-founder, Consulting"
						from="2018"
						tags={["web dev", ]}
					>
						<p>
							I co-founded Tentium and I build software for clients,
							mostly full-stack web applications and websites.
							Spurdo sperde. My brollicking the bricks.
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
							The backend was written in Node.js using KeystoneJS.
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
						</p>
					</Experience>
				</ExperienceList>
			</div>
			<div className="flex-1 px-2">
				<ExperienceList name="Education">
					<Experience
						mainTitle="Student at Kungliga Tekniska Högskolan"
						subTitle="Computer Science"
						from="2018"
					/>
					<Experience
						mainTitle="ABB Industrigymnasium"
						subTitle="Technology Programme"
						from="2015"
						to="2018"
					/>
				</ExperienceList>
				<ExperienceList name="Projects">
					<Experience
						mainTitle="Bemi Is You"
						from="2019"
						to="2019"
						link="https://github.com/FOLLGAD/bemi-is-you"
						tags={["go", "pixi.js", "websockets"]}
					>
						<p>
							A multiplayer puzzle game, inspired by the game "Baba Is You".
							The backend was fully written in Go, using WebSockets for communication with the players.
						</p>
					</Experience>
					<Experience
						mainTitle="Bemilanche"
						from="2017"
						to="2017"
						link="https://github.com/FOLLGAD/bemilanche"
					>
						<p>
							A multiplayer arcade game based on jumping on falling blocks and avoiding death.
						</p>
					</Experience>
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

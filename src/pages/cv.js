import React from "react"
import Experience from "../components/experience"
import ExperienceList from "../components/experience-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GithubImage from "../components/github"

const IndexPage = () => (
	<Layout>
		<SEO title="CV" />

		<div>
			{/* <div style={{ width: "1.5rem", display: 'inline-block', verticalAlign: 'middle', marginRight: 7 }}>
				<GithubImage />
			</div> */}
			<a href="github.com/follgad">github.com/follgad</a>
		</div>

		<div className="cols">
			<div className="col">
				<ExperienceList name="Experience">
					<Experience
						mainTitle="Redditors"
						subTitle="Lead Developer, Channel Manager"
						from="2019"
						to="2019"
					>
						<p>
							I developed automation software for rendering the video-rendering
							process and cut the time required per video by 90%.
							I also helped manage the channel.
						</p>
					</Experience>
					<Experience
						mainTitle="TenFAST — Estate Management"
						subTitle="Co-founder, Developer"
						from="2018"
						link="https://tenfast.se"
					>
						<p>
							An estate management service we started working on in 2018.
						</p>
					</Experience>
					<Experience
						mainTitle="Tentium AB"
						subTitle="Co-founder, Consulting"
						from="2018"
					>
						<p>I co-founded Tentium and I build software for clients, mostly full-stack web applications and websites.</p>
					</Experience>
					<Experience
						mainTitle="Sjukvårdskonsulterna"
						subTitle="Developer"
						from="2016"
						to="2017"
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
					>
						<p>
							This was a project for school, where we developed an app
							in React Native with the capacity of scanning QR codes
							and displaying related information from a database.
						</p>
					</Experience>
				</ExperienceList>
			</div>
			<div className="col">
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
					>
						<p>
							A multiplayer puzzle game, inspired by the game "Baba Is You".
							The backend was fully written in Go, using WebSockets for communication with the players.
						</p>
					</Experience>
					<Experience
						mainTitle="Bemilanche"
						from="2018"
						to="2018"
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

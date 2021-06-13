import React from "react"
import Experience from "../components/experience"
import ExperienceList from "../components/experience-list"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"
import Sublist from "../components/sublist"
import SublistItem from "../components/sublist-item"

const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />

    <div className="flex">
      <div className="flex-1 px-4">
        <div className="text-5xl text-gray-700 mb-6 mt-3 inline-block">
          Emil Ahlbäck
        </div>

        <div className="mb-3 float-right text-right">
          <Info right>
            <a href="https://follgad.github.io">https://follgad.github.io</a>
          </Info>
          <Info icon="cil-location-pin" right>
            Stockholm, Sweden
          </Info>
          <Info icon="cil-phone" right>
            +46 70 491 17 76
          </Info>
          <Info icon="cil-envelope-closed" right>
            <a href="mailto:ahlback.emil@gmail.com">ahlback.emil@gmail.com</a>
          </Info>
          <Info icon="cib-github" right>
            <a href="https://github.com/follgad">github.com/follgad</a>
          </Info>
          <Info icon="cib-linkedin" right>
            <a href="https://linkedin.com/in/emil-ahlback">
              linkedin.com/in/emil-ahlback
            </a>
          </Info>
        </div>

        <p>
          I'm a developer with an entrepreneurial spirit. I've been doing
          professional web development since 4 years back. I love
          problem-solving and am constantly looking to learn things and find new
          problems to solve.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="flex-1 px-4 basis-25">
        <ExperienceList name="Experience">
          <Experience
            mainTitle="Developer — Depict.ai"
            from="Mar 2021"
            link="https://depict.ai"
            tags={["Javascript", "Python", "Docker"]}
          >
            <p>
              Depict.ai's mission is using cutting-edge AI to bring
              Amazon-quality product recommendations to everyone. Worked on both
              the Python backend and on the frontend, working with very
              well-known e-commerce stores to seamlessly inject our
              recommendations on their websites.
            </p>
          </Experience>
          <Experience
            mainTitle="Developer — Curb Food"
            from="Feb 2021"
            to="Mar 2021"
            link="https://curbfood.com"
            tags={["React Native", "Firebase", "GraphQL", "Node.js"]}
          >
            <p>
              Was part of the initial tech team at Curb Food, a food delivery
              app. Did much of the work setting up the backend using Firebase
              and developed the food delivery app.
            </p>
          </Experience>
          <Experience
            mainTitle="Web Developer — Video.io"
            from="Aug 2020"
            to="Feb 2021"
            link="https://video.io"
            tags={["React", "UX", "GCP", "Node.js"]}
          >
            <p>
              Worked together with a team of desginers and backend devs to
              create some customer facing products.
            </p>
          </Experience>
          <Experience
            mainTitle="Lead Developer — Redditors"
            link="https://www.youtube.com/channel/UCmu_67Qpj7xBn7WxUoRi8FQ"
            from="Apr 2019"
            tags={["React", "Redux", "Node.js", "ffmpeg"]}
          >
            <p>Redditors is a Youtube channel I co-founded.</p>
            <Sublist>
              <SublistItem>
                I{" "}
                <a
                  className="text-blue-600"
                  href="https://app.redditvideomaker.com/"
                >
                  developed a service
                </a>{" "}
                to cut down the editing time and allow creating videos from
                anywhere
              </SublistItem>
              <SublistItem>
                Cut down the time requried to below 15 min per video (decreased
                by over 80%) while simultaneously improving the viewer
                experience
              </SublistItem>
              <SublistItem>
                This has enabled us to go from 0 subscribers and views to 100k
                subscribers and 40 million views in just a year.
              </SublistItem>
            </Sublist>
          </Experience>
          <Experience
            mainTitle="Co-founder, Full-stack developer — TenFAST"
            from="2018"
            to="2020"
            link="https://tenfast.se"
            tags={["MongoDB", "Node.js", "Nuxt.js", "Vue", "Stripe"]}
          >
            <p>
              A modern real-estate management system we started building in
              2018, with paying customers varying from small business owners to
              Swedish municipalities.
            </p>
            <Sublist>
              <SublistItem>
                The front-end is written with Nuxt.js, with a Node.js Express
                API in the backend.
              </SublistItem>
              <SublistItem>
                TenFAST is a member of the{" "}
                <a
                  className="text-blue-600"
                  href="https://www.kth.se/en/innovation"
                >
                  KTH Innovation
                </a>{" "}
                pre-incubation program.
              </SublistItem>
            </Sublist>
          </Experience>
          <Experience
            mainTitle="Full-stack developer — Sjukvårdskonsulterna"
            link="https://sjukvardskonsulterna.se"
            from="Dec 2016"
            to="2018"
            tags={[
              "React Native",
              "jQuery",
              "MongoDB",
              "Keystone.js",
              "Node.js",
            ]}
          >
            <p>
              Sjukvårdskonsulterna is a consulting firm in the healthcare
              sector.
            </p>
            <Sublist>
              <SublistItem>
                Developed their entire web system from scratch
              </SublistItem>
              <SublistItem>
                Used routinely for many tasks of both management and the
                consultants, including time-tracking, and publishing and finding
                assignments
              </SublistItem>
              <SublistItem>In production since 2017</SublistItem>
              <SublistItem>
                We built an accompanying app in React Native
              </SublistItem>
            </Sublist>
          </Experience>
          <Experience
            mainTitle="Co-founder, Full-stack developer — Tentium AB"
            link="https://tentium.se"
            from="2018"
            to="2021"
            tags={["Web Development", "Graphic Design"]}
          >
            <p>
              At Tentium, we build software for clients. We're a team of two,
              focusing mainly on building full-stack development solutions.
            </p>
          </Experience>
          {/* <Experience */}
          {/*   mainTitle="Inventory Management Tool for ABB" */}
          {/*   from="Spring 2017" */}
          {/*   to="Spring 2017" */}
          {/*   tags={["React Native", "Vue.js"]} */}
          {/* > */}
          {/*   <p> */}
          {/*     This app was developed as a project for high-school. The app */}
          {/*     connected to a Node API and a database, to allow quick lookup of */}
          {/*     inventory items, in order to facilitate inventory management at */}
          {/*     ABB. */}
          {/*   </p> */}
          {/*   <Sublist> */}
          {/*     <SublistItem>The app was written with React Native</SublistItem> */}
          {/*     <SublistItem> */}
          {/*       Presented a working prototype for the president of ABB Sweden */}
          {/*     </SublistItem> */}
          {/*   </Sublist> */}
          {/* </Experience> */}
        </ExperienceList>
      </div>
      <div className="flex-1 px-2">
        <ExperienceList name="Education">
          <Experience
            mainTitle="Computer Science, Royal Institute of Technology"
            subTitle="Stockholm, Sweden"
            from="2018"
            to="2020"
          />
          <Experience
            mainTitle="Technology Programme, ABB Industrigymnasium"
            subTitle="Västerås, Sweden"
            from="2015"
            to="2018"
          />
        </ExperienceList>
        <ExperienceList name="For fun">
          {/* <p className="mt-2 text-gray-900">I've done many projects just for fun:</p> */}
          <Experience
            mainTitle="Bemi is You"
            from="2019"
            to="2019"
            link="https://github.com/FOLLGAD/bemi-is-you"
            tags={["Go", "WebSockets", "pixi.js"]}
          >
            <p>
              An online multiplayer puzzle game, where the game rules are
              dynamically modified by rearranging blocks of text. The backend
              was fully written in Go, using WebSockets for communication with
              the clients.
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
          <Experience mainTitle="Javascript/Node.js">
            I have a long experience using the Javascript/Node.js ecosystem
          </Experience>
          <Experience mainTitle="React">
            My stack of choice is React and Node.js
          </Experience>
          <Experience mainTitle="Linux">
            I prefer the freedom of Linux over other OSes, and since 2018 I've
            opted to use Linux exclusively
          </Experience>
        </ExperienceList>
        <ExperienceList name="Languages">
          <Experience mainTitle="Swedish" subTitle="Native Fluency" />
          <Experience mainTitle="English" subTitle="Full Fluency" />
          <Experience mainTitle="Spanish" subTitle="Intermediate" />
        </ExperienceList>
      </div>
    </div>
  </Layout>
)

export default IndexPage

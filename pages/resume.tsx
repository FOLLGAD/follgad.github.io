import Experience from "../components/experience";
import ExperienceList from "../components/experience-list";
import Layout from "../components/layout";
import Info from "../components/info";
import Sublist from "../components/sublist";
import SublistItem from "../components/sublist-item";

const ContactInfo = () => (
  <div className="mt-4 mb-3 ml-4 float-right rounded-lg p-4 pl-6 shadow-lg text-gray-700 bg-gray-100">
    <h2 className="text-sm uppercase tracking-widest font-bold text-blue-500">
      Contact me
    </h2>

    <Info icon="cil-location-pin">Stockholm, Sweden</Info>
    <Info icon="cil-phone">+46 70 491 17 76</Info>
    <a href="mailto:ahlback.emil@gmail.com">
      <Info icon="cil-envelope-closed">emil@neostack.io</Info>
    </a>
    <a href="https://github.com/follgad">
      <Info icon="cib-github">github.com/follgad</Info>
    </a>
    <a href="https://linkedin.com/in/emil-ahlback">
      <Info icon="cib-linkedin">linkedin.com/in/emil-ahlback</Info>
    </a>
    <a href="https://twitter.com/emilahlback">
      <Info icon="x">@emilahlback</Info>
    </a>
  </div>
);

const IndexPage = () => (
  <Layout>
    <div className="flex flex-wrap px-4">
      <div className="flex-1" style={{ flexBasis: "30%" }}>
        <div>
          <ContactInfo />
        </div>
        <div className="flex-1">
          <div className="text-4xl font-medium text-gray-700 mb-6 mt-3 inline-block">
            Emil Ahlbäck
          </div>
          <div>
            <p>
              My name is Emil, I'm a Software Engineer with skills in
              full-stack, AI and entrepreneurship. Currently looking for roles
              in AI.
            </p>
          </div>
        </div>

        <ExperienceList name="Experience & Projects">
          <Experience
            mainTitle="Software Engineer — Godmode"
            from="Mar 2022"
            to="Jan 2024"
            tags={["Nest.js", "Next.js", "React", "GCP", "Typscript"]}
          >
            <p>
              Dework was a decentralized work platform that aimed to
              revolutionize how work is done. As a full-stack engineer I worked
              together with the founding engineer to build the platform from the
              ground up.
            </p>
            <p>
              The company later pivoted into Godmode, a B2B platform for AI
              Agents. There I also worked as a full-stack engineer.
            </p>
          </Experience>
          <Experience
            mainTitle="Godmode ⚡️"
            link="https://godmode.space"
            tags={["OpenAI", "GPT-4", "React", "Python"]}
            from="Apr 2023"
            to="Apr 2023"
          >
            <p>
              I developed the first ever web-based platform for AI Agents
              <span className="text-blue-600 noprint">
                <a
                  href="https://twitter.com/_Lonis_/status/1646641412182536196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  [twitter post]
                </a>
              </span>
              .
            </p>
            <p>
              <strong>1M+</strong> users in the first 3 months.
            </p>
            <p>
              <strong>500k+</strong> agents created.
            </p>
          </Experience>
          <Experience
            mainTitle="Software Consultant — Self employed"
            from="Oct 2021"
            location="Neostack AB"
            tags={["LLMs", "Fine-tuning", "RAG", "GPT-4", "AWS"]}
          >
            <p>
              Worked for a variety of clients, from startups to large
              corporations. I also joined the Toptal network in 2021, an
              exclusive network of the top 3% of freelance developers.
            </p>
            <p className="mt-2">My clients include:</p>
            <ul className="list-disc pl-4">
              <li>
                Signet Jewelers, the world's largest online jewelry retailer (AI
                Engineer)
              </li>
              <li>
                Array, a New York fintech startup (Senior Software Engineer)
              </li>
            </ul>
          </Experience>
          {/* <Experience
            mainTitle="Sherlock 🕵️"
            link="https://github.com/FOLLGAD/sherlock"
            tags={["OpenAI", "Function Calling", "Embedded"]}
            from="Feb 2023"
            to="Feb 2023"
          >
            <p>
              I developed a chat-based AI agent that could fully control my home automation system using sandboxed Python instances (before ChatGPT added function calling).
            </p>
          </Experience> */}
          <Experience
            mainTitle="Developer — Depict"
            from="Mar 2021"
            to="Sep 2021"
            link="https://depict.ai"
            tags={["Typescript", "GCP", "Node.js", "Python", "Docker"]}
            location="Stockholm"
          >
            <p>I was one of two members of the frontend team at Depict.</p>
            <Sublist>
              <SublistItem>
                I pushed code daily that reached <b>millions</b> of users
                through e-commerce websites based in Sweden and worldwide.
              </SublistItem>
              <SublistItem>
                Designed and developed their email recommendation system from
                scratch.
              </SublistItem>
              <SublistItem>
                Led the development of the analytics dashboard for their
                customers.
              </SublistItem>
              <SublistItem>
                Improved DX by automating the deployment process, helping
                transition the entire codebase to Typescript, and creating a
                library allowing compile-time JSX to allow writing fast and
                efficient React-style code
                <a
                  className="text-blue-600 noprint"
                  href="https://www.npmjs.com/package/jsx2js"
                >
                  {" "}
                  [npm]
                </a>
                .
              </SublistItem>
            </Sublist>
          </Experience>
          <Experience
            mainTitle="Redditors Studios"
            link="https://www.youtube.com/channel/UCmu_67Qpj7xBn7WxUoRi8FQ"
            subTitle="Apr 2019"
            tags={["React", "Redux", "Node.js", "ffmpeg", "AWS"]}
          >
            <p>Redditors is a Youtube channel I started and ran.</p>
            <Sublist>
              <SublistItem>
                I{" "}
                <a
                  className="text-blue-600"
                  href="https://github.com/FOLLGAD/reddit-video-maker"
                >
                  developed and open-sourced a service
                </a>{" "}
                to automate video editing.
              </SublistItem>
              <SublistItem>
                Cut down the time required by <strong>90%</strong>{" "}
                (&lt;15min/video) while simultaneously improving the viewer
                experience.
              </SublistItem>
              <SublistItem>
                Reached <strong>100k</strong> subscribers and{" "}
                <strong>40 million</strong> views in under a year of starting.
              </SublistItem>
            </Sublist>
          </Experience>
          <Experience
            mainTitle="Web Developer — Video.io"
            from="Aug 2020"
            to="Feb 2021"
            link="https://video.io"
            tags={["React", "GCP", "Node.js"]}
            location="San Fransisco"
          >
            <p>
              Worked together with a team with desginers and backend devs to
              create a customer-facing dashboards and other products. Among
              others a summarization tool using BERT to summarize videos and
              present the transcript in a user-friendly way.
            </p>
          </Experience>
          <Experience
            mainTitle="Co-founder & CTO — TenFAST"
            from="2018"
            to="2020"
            link="https://tenfast.se"
            tags={["MongoDB", "Node.js", "Vue", "Stripe"]}
            location="Stockholm"
          >
            <p>
              A modern real-estate management system we started building in
              2018.
            </p>
            <Sublist>
              <SublistItem>
                Customers ranging from small business owners to{" "}
                <a className="text-blue-600" href="https://morakommun.se/">
                  Swedish municipalities
                </a>
                .
              </SublistItem>
              <SublistItem>
                TenFAST joined the{" "}
                <a
                  className="text-blue-600"
                  href="https://www.kth.se/om/innovation/om/nyheter/digital-kick-off-for-17-nya-kth-startups-1.967571"
                >
                  KTH Innovation
                </a>{" "}
                pre-incubation program.
              </SublistItem>
            </Sublist>
          </Experience>
          <Experience
            mainTitle="Co-founder, Full-stack developer — Tentium AB"
            link="https://tentium.se"
            from="2017"
            to="2021"
            tags={["Web Development", "Graphic Design"]}
          >
            <p>
              My first company, started in 2017. We built and maintained a
              variety of web applications for clients:
              <Sublist>
                <SublistItem>
                  A consulting firm in the healthcare sector for whom we built
                  their entire web system, handling millions of SEK in revenue.
                </SublistItem>
                <SublistItem>Web-based video rendering programs.</SublistItem>
                <SublistItem>A hotel booking system.</SublistItem>
              </Sublist>
            </p>
          </Experience>
        </ExperienceList>

        <ExperienceList name="Education">
          <Experience
            mainTitle="Artificial Intelligence, Nanyang Technological University"
            location="Singapore"
            from="2023"
            to="2023"
          />
          <Experience
            mainTitle="Computer Science, KTH Royal Institute of Technology"
            location="Stockholm, Sweden"
            from="2018"
            to="2023"
          />
        </ExperienceList>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

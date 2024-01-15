import Experience from "../components/experience";
import ExperienceList from "../components/experience-list";
import Layout from "../components/layout";
import Info from "../components/info";
import Sublist from "../components/sublist";
import SublistItem from "../components/sublist-item";

const IndexPage = () => (
  <Layout>
    <div className="flex">
      <div className="flex-1 px-4">
        <div className="text-4xl font-medium text-gray-700 mb-6 mt-3 inline-block">
          Emil Ahlbäck
        </div>

        <div className="mb-3 ml-4 float-right rounded-lg p-4 pl-6 shadow-lg text-gray-700 bg-gray-100">
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
        <div>
          <p className="mt-2">
            My name is Emil, I am a developer with a passion for
            entrepreneurship and problem solving in real world applications.
          </p>

          <p className="mt-2">
            I have a wide background in Software Engineering and Machine
            Learning. I have for companies ranging from small startups to large
            corporations. I have also started and run my own companies.
          </p>

          <p className="mt-2">
            Currently looking for: Roles in Engineering and Research within the
            field of AI.
          </p>

          <p className="mt-2">
            Outside of work I enjoy running, reading and climbing.
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="flex-1 px-4" style={{ flexBasis: "30%" }}>
        <ExperienceList name="Experience">
          <Experience
            mainTitle="Software Engineer — Godmode"
            from="Mar 2022"
            to="2023"
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
            <p className="mt-2 italic">My clients include:</p>
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
                I pushed code daily that reached millions of users through
                e-commerce websites based in Sweden and worldwide.
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
                efficient React-style code.
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
      </div>
      <div className="flex-1 px-2">
        <ExperienceList name="Education">
          <Experience
            mainTitle="Artificial Intelligence, Nanyang Technological University"
            location="Singapore"
            from="2023"
            to="2023"
          />
          <Experience
            mainTitle="Computer Science, Royal Institute of Technology"
            location="Stockholm, Sweden"
            from="2018"
            to="2023"
          />
          <Experience
            mainTitle="Technology Programme, ABB Industrigymnasium"
            location="Västerås, Sweden"
            from="2015"
            to="2018"
          />
        </ExperienceList>
        <ExperienceList name="Projects">
          {/* <p className="mt-2 text-gray-900">I've done many projects just for fun:</p> */}
          <Experience
            mainTitle="Godmode ⚡️"
            link="https://godmode.space"
            tags={["OpenAI", "GPT-4", "React", "Python"]}
          >
            <p>
              I developed the first web-based platform for AI Agents{" "}
              <span className="text-blue-600">
                <a
                  href="https://twitter.com/_Lonis_/status/1646641412182536196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [twitter post]
                </a>
              </span>
              .
            </p>
            <p>
              <strong>1M+</strong> users in the first 3 months.{" "}
              <strong>500k+</strong> agents created.
            </p>
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
                to automate video editing
              </SublistItem>
              <SublistItem>
                Cut down the time required to below 15 min per video (decreased
                by over 80%) while simultaneously improving the viewer
                experience
              </SublistItem>
              <SublistItem>
                This enabled us to go from 0 subscribers and views to 100k
                subscribers and 40 million views in under a year.
              </SublistItem>
            </Sublist>
          </Experience>
        </ExperienceList>
        <ExperienceList name="Skills">
          <Experience mainTitle="Javascript">
            I have many years of experience using the Javascript/Node.js
            ecosystem
          </Experience>
          <Experience mainTitle="Python">
            I have used Python for many years, both for web and ML.
          </Experience>
          <Experience mainTitle="React">
            My stack of choice is React and Node.js
          </Experience>
        </ExperienceList>
        <ExperienceList name="Languages">
          <Experience mainTitle="Swedish" subTitle="Native fluency" />
          <Experience mainTitle="English" subTitle="Full fluency" />
          <Experience mainTitle="Spanish" subTitle="Intermediate (learning)" />
        </ExperienceList>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

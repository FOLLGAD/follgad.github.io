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

        <div className="mb-3 float-right text-right">
          <Info icon="cil-location-pin" right>
            Stockholm, Sweden
          </Info>
          <Info icon="cil-phone" right>
            +46 70 491 17 76
          </Info>
          <Info icon="cil-envelope-closed" right>
            <a href="mailto:ahlback.emil@gmail.com">emil@neostack.io</a>
          </Info>
          <Info icon="cib-github" right>
            <a href="https://github.com/follgad">github.com/follgad</a>
          </Info>
          <Info icon="cib-linkedin" right>
            <a href="https://linkedin.com/in/emil-ahlback">
              linkedin.com/in/emil-ahlback
            </a>
          </Info>
          <Info icon="x" right>
            <a href="https://twitter.com/emilahlback">@emilahlback</a>
          </Info>
        </div>

        <p>
          I'm a developer with an entrepreneurial spirit. I've been doing
          professional web development since high school. I love problem-solving
          and am constantly looking for new challenges and for opportunities to
          learn.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="flex-1 px-4" style={{ flexBasis: "30%" }}>
        <ExperienceList name="Experience">
          <Experience
            mainTitle="Software Consultant — Self employed"
            from="Oct 2021"
            location="Neostack AB"
            tags={[
              "Fine-tuning",
              "Llama",
              "Retrieval-Augmented Generation",
              "Embeddings",
              "GPT-4",
              "AWS",
            ]}
          >
            <p>
              Worked for a variety of clients, from startups to large
              corporations.
            </p>
            <p>Clients include:</p>
            <ul className="list-disc pl-4">
              <li>
                a New York fintech startup{" "}
                <a className="text-blue-600" href="https://array.com">
                  Array
                </a>{" "}
                (Senior Software Engineer)
              </li>
              <li>
                Signet Jewelers, the world's largest online jewelry retailer (AI
                Engineer)
              </li>
            </ul>
          </Experience>
          <Experience
            mainTitle="Software Engineer — Dework"
            from="Mar 2022"
            to="Dec 2022"
            tags={["Nest.js", "Next.js", "React", "GCP", "Typscript"]}
            location="Remote"
          >
            <p>
              Dework is a decentralized work platform that aims to revolutionize
              how work is done. As a full-stack engineer I've been working
              together with the founding engineer to build the platform from the
              ground up.
            </p>
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
                Daily pushed code that reached millions of users through
                e-commerce websites in Sweden and worldwide
              </SublistItem>
              <SublistItem>
                Designed and developed their email recommendation system from
                scratch
              </SublistItem>
              <SublistItem>
                Led the development of the dashboard for their customers.
                Written in React and Next.js
              </SublistItem>
              <SublistItem>
                Improved DX by automating the deployment process, helping
                transition the entire codebase to Typescript, and creating a
                library allowing compile-time JSX to allow writing fast and
                efficient React-style code
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
            mainTitle="Co-founder, Full-stack developer — TenFAST"
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
                  Sjukvårdskonsulterna, a consulting firm in the healthcare
                  sector for whom we built their entire web system, handling
                  millions of SEK in revenue.
                </SublistItem>
                <SublistItem>Web-based video rendering programs</SublistItem>
                <SublistItem>A hotel booking system</SublistItem>
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
              I developed the first web-based platform for AI Agents. We reached
              1M users over the first three months{" "}
              <span className="text-blue-600">
                <a
                  href="https://twitter.com/_Lonis_/status/1646641412182536196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [twitter]
                </a>
              </span>
              .
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

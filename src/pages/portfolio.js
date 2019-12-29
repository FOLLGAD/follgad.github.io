import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" />
		<div className="flex flex-wrap">
			<div className="md:w-1/2 w-full">
				Bemilanche
			</div>
			<div className="md:w-1/2 w-full">
				Bemi is you
			</div>
			<div className="md:w-1/2 w-full">
				Redditvideomaker
			</div>
		</div>
	</Layout>
)

export default IndexPage

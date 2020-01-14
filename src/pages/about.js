import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="About me" />
		<div className="flex flex-wrap px-4">
			<div>

				<p>
					My name is Emil Ahlbäck. I'm from Västerås, Sweden.
				</p>
				<p>
					I enjoy programming in all it's forms.
					I've been into web-dev since 2016.
				</p>
			</div>
		</div>
	</Layout>
)

export default IndexPage

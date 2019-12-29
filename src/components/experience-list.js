import PropTypes from "prop-types"
import React from "react"

const ExperienceList = ({ children, name }) => (
	<div className="mb-6 mt-4">
		<h2 className="text-base uppercase tracking-widest font-bold text-gray-500">{name}</h2>
		{children}
	</div>
)

ExperienceList.propTypes = {
  name: PropTypes.string,
}

ExperienceList.defaultProps = {
  name: ``,
}

export default ExperienceList

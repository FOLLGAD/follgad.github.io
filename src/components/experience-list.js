import PropTypes from "prop-types"
import React from "react"

const ExperienceList = ({ children, name }) => (
	<div className="xp-list">
		<h2 className="xp-header">{name}</h2>
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

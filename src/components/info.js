import PropTypes from "prop-types"
import React from "react"

let className = (obj) => Object.keys(obj).filter(key => obj[key]).join(" ")

const Info = ({ children, icon }) => (
	<div className="my-1">
		<i className={className({
			[icon]: true,
			"text-xl": true,
			"align-text-top": true,
			"mr-1": true
		})}></i> <span>{children}</span>
	</div>
)

Info.propTypes = {
	icon: PropTypes.string,
}

Info.defaultProps = {
	icon: ``,
}

export default Info

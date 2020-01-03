import PropTypes from "prop-types"
import React from "react"
require("@coreui/icons/css/all.min.css") // Because import doesnt work for this file for some reason

// Takes in an object, converts all keys with a truthy values into a classname
let className = (obj) => Object.keys(obj).filter(key => obj[key]).join(" ")

const Info = ({ children, icon, right }) => {
	let iconEl = icon && <i className={icon + " text-xl align-text-top"}></i>
	return (
		<div className={className({
			"mt-2": true,
			"text-right": right,
		})}>
			{!right && iconEl}
			<span className="mx-2">{children}</span>
			{right && iconEl}
		</div>
	)
}

Info.propTypes = {
	icon: PropTypes.string,
	right: PropTypes.bool,
}

Info.defaultProps = {
	icon: ``,
	right: false,
}

export default Info

import Image from "next/image"
import React from "react"
import XLogo from '../styles/logo-black.png'
require("@coreui/icons/css/all.min.css") // Because import doesnt work for this file for some reason

// Takes in an object, converts all keys with a truthy values into a classname
let className = (obj) => Object.keys(obj).filter(key => obj[key]).join(" ")

const Info = ({ children, icon = "", right = false }) => {
	let iconEl = icon && icon === "x" ? <Image src={XLogo} width={16} height={16} /> : <i className={icon + " text-xl align-text-top"}></i>
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

export default Info

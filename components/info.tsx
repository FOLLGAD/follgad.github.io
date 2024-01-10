import React from "react"
import "@coreui/icons/css/all.min.css"

let className = (obj: {[key: string]: boolean}) => Object.keys(obj).filter(key => obj[key]).join(" ")

const Info: React.FC<{children: React.ReactNode, icon?: string, right?: boolean}> = ({ children, icon = "", right = false }) => {
	let iconEl = icon && icon === "x" ? <img src="/static/logo-black.png" alt="X/twitter" width={16} height={16} /> : <i className={icon + " text-xl align-text-top"}></i>
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

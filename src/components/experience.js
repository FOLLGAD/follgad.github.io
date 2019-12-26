import PropTypes from "prop-types"
import React from "react"

const linkIcon = (<svg className="link-icon" viewBox="0 0 24 24"><path className="fill-current" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"></path></svg>)

const Experience = ({ mainTitle, subTitle, from, to, link, children }) => {
	const timeTitle = from
		? (to
			? from === to
				? from
				: from + " — " + to
			: "Since " + from)
		: null

	const main = (
		<h2 className="title">
			{mainTitle}
			{link && linkIcon /* Show the link icon */}
		</h2>
	)

	return (
		<div className="xp">
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>
				<div>
					<div className="title-div">
						{link
							? <a href={link} target="_blank">{main}</a>
							: main}
					</div>
					<div className="subtitle">
						{timeTitle}
						{subTitle && timeTitle && " | "}
						{subTitle}
					</div>
				</div>
			</div>
			<div className="xp-body">
				{children}
			</div>
		</div>
	)
}

Experience.propTypes = {
	mainTitle: PropTypes.string,
	subTitle: PropTypes.string,
	timeTitle: PropTypes.string,
}

Experience.defaultProps = {
	mainTitle: ``,
	subTitle: ``,
	timeTitle: ``,
}

export default Experience

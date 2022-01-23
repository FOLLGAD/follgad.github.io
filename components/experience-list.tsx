import React from "react"

const ExperienceList: React.FC<{name:string}> = ({ children, name }) => (
	<div className="mb-6 mt-4">
		<h2 className="text-sm uppercase tracking-widest font-bold text-blue-500">{name}</h2>
		{children}
	</div>
)

export default ExperienceList

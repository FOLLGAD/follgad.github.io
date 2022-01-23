import React from 'react'

const Sublist = ({ children }) => (
    <ul style={{ listStyle: "disc", marginLeft: "1em", paddingLeft: "0.5em" }}>
        {children}
    </ul>
)

export default Sublist
import React, { FC } from 'react'

const Sublist: FC = ({ children }) => (
    <ul style={{ listStyle: "disc", marginLeft: "1em", paddingLeft: "0.5em" }}>
        {children}
    </ul>
)

export default Sublist
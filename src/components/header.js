import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="print:hidden bg-blue-700 mb-4">
    <div className="flex container mx-auto justify-between">
      <div className="p-4">
        <Link to="/" className="text-decoration-none text-gray-200 text-2xl font-semibold">
          {siteTitle}
        </Link>
      </div>

      <div className="my-auto flex">
        <Link to="/portfolio" className="mx-2 px-2 py-1 text-decoration-none text-gray-200">
          Portfolio
        </Link>
        <Link to="/cv" className="mx-2 px-2 py-1 text-decoration-none text-gray-200">
          CV
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

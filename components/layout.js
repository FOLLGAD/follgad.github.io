import Header from "./header"
import "./layout.module.css"

const Layout = ({ children }) => {
  // let year = (new Date()).getFullYear()

  return (
    <>
      <Header siteTitle="follgad" />
      <div className="container mx-auto content-container">
        <main>{children}</main>
        {/* <footer>
          Emil Ahlbäck, {year}
        </footer> */}
      </div>
    </>
  )
}

export default Layout

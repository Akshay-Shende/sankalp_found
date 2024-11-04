import Footer from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <> 
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout
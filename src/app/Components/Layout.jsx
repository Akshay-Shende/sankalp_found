import Footer from "../Components/footer"
import Header from "../Components/header"

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
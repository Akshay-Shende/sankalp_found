import Footer from "../Components/footer"
import Header from "../Components/header"
import ScrollHeader from "./scrollHeader"

const Layout = ({ children }) => {
  return (
    <> 
    <ScrollHeader />
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout
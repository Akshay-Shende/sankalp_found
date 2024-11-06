import Footer from "../Components/footer";
import Header from "../Components/header";
import ScrollHeader from "./scrollHeader";
import { MyProvider } from "../context/myContext";
const Layout = ({ children }) => {
  return (
    <>
      <MyProvider>
        <ScrollHeader />
        <Header />
        {children}
        <Footer />
      </MyProvider>
    </>
  );
};

export default Layout;

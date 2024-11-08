import Footer from "../Components/footer";
import Header from "../Components/header";
import ScrollHeader from "@/app/Components/ScrollHeader";
import { MyProvider } from "../context/myContext";
import { Toaster, toast } from 'sonner'
const Layout = ({ children }) => {
  return (
    <>
       <Toaster position="top-center" richColors />
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

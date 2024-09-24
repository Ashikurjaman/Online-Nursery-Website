import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Pages/Footer";

const MainLayouts = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;

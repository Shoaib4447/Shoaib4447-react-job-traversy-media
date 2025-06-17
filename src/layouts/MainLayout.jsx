import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import image from "../assets/images/image.png";
const MainLayout = () => {
  return (
    <>
      <Navbar logo={image} />
      <Outlet />
    </>
  );
};

export default MainLayout;

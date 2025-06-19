import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import image from "../assets/images/image.png";
const MainLayout = () => {
  return (
    <>
      <Navbar logo={image} />
      <Outlet />
      <ToastContainer autoClose={8000} />
    </>
  );
};

export default MainLayout;

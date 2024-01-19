import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="min-h-full bg-[#070724]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;

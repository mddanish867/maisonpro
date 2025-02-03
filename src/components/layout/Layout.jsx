import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

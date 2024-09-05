import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;

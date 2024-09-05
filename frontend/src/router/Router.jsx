import { createBrowserRouter } from "react-router-dom"; // Import createBrowserRouter
import MainLayout from "../layoust/MainLayout.jsx";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx"; // Make sure Home and Layout are imported
import Dashbard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", // Main route of the application
        element: <Home />, // Displays the Home component for '/'
      },
      {
        path: "dashboard", // Main route of the application
        element: <Dashbard />, // Displays the Home component for '/'
      },
      {
        path: "/add", // Route for adding an item
        element: <Add />, // Displays the Add component for '/add'
      },
    ],
  },
]);

export default router;

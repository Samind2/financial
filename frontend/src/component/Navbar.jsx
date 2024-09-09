import { useState, useEffect } from "react";
import {
  SignUpButton,
  SignInButton,    // Import SignInButton
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react"; // Correct package for React

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-[#F5EDED] shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-[#6482AD] text-xl">Dashboard</a>
      </div>
      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <header className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal" className="btn bg-[#7FA1C3] text-white" /> {/* Add SignInButton */}
              <SignUpButton mode="modal" className="btn bg-[#7FA1C3] text-white" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
        <div className="theme">
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              className="toggle theme-controller"
              onChange={handleToggle}
              checked={theme === "dark"}
            />
            <svg
              className="stroke-[#6482AD] fill-[#6482AD]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-[#6482AD] fill-[#6482AD]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

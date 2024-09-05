import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <SignedOut>
        <h1>Welcome to your own Personal Finance Tracker</h1>
      </SignedOut>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
    </div>
  );
};

export default Home;

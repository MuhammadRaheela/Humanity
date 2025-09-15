// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Slider from "../../components/Slider";
import Selfimprvements from "../../components/selfim";
import Islamicknowledge from "../../components/islam";
import Tecnology from "../../components/Tecnology";
import Generalknowledge from "../../components/Generalknowledge";
import Scienceknowledge from "../../components/scienceknowledge";
import ProtectedRoute from "./ProtectedRoute";
import SignInPage from "../../components/Signin";
import SignUpPage from "../../components/Signup";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import PublicNavigation from "../../components/PublicNavigation";
import Navigation from "../../components/Navigation";

const AppRouter = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname.startsWith("/signin") ||
    location.pathname.startsWith("/signup");

  if (isAuthPage) {
    return (
      <Routes>
        {/* 👇 note the /* here */}
        <Route path="/signin/*" element={<SignInPage />} />
        <Route path="/signup/*" element={<SignUpPage />} />
      </Routes>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <SignedOut>
        <PublicNavigation />
      </SignedOut>
      <SignedIn>
        <Navigation />
      </SignedIn>

      <SignedIn>
        {location.pathname === "/" && <Slider />}
      </SignedIn>
      <SignedOut>
        {location.pathname === "/" && (
          <div className="h-[80vh] flex items-center justify-center">
            <h2 className="text-gray-600 text-xl">
              Welcome! Please sign in to explore more.
            </h2>
          </div>
        )}
      </SignedOut>

      <Routes>
        <Route path="/selfim" element={<Selfimprvements />} />
        <Route path="/islam" element={<Islamicknowledge />} />
        <Route path="/Tecnology" element={<Tecnology />} />
        <Route path="/Generalknowledge" element={<Generalknowledge />} />
        <Route
          path="/scienceknowledge"
          element={
            <ProtectedRoute>
              <Scienceknowledge />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;

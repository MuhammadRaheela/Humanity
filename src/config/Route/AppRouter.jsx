import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../../components/Slider";
import Selfimprvements from "../../components/selfim";
import Islamicknowledge from "../../components/islam";
import Tecnology from "../../components/Tecnology";
import Generalknowledge from "../../components/Generalknowledge";
import Scienceknowledge from "../../components/scienceknowledge";
import ProtectedRoute from "./ProtectedRoute";
import SignInPage from "../../components/Signin";
import SignUpPage from "../../components/Signup";



const AppRouter = () => {
  return (
    <div className="pt-20 px-4">
      <Routes>
        {/* Public routes */}

        <Route path="/" element={<Slider />} />
        <Route path="/selfim" element={<Selfimprvements />} />
        <Route path="/islam" element={<Islamicknowledge />} />
        <Route path="/Tecnology" element={<Tecnology />} />
        <Route path="/Generalknowledge" element={<Generalknowledge />} />
        <Route path="/signin" element={<SignInPage/>} /> {/* ✅ new route */}
        <Route path="/signup" element={<SignUpPage />} /> {/* ✅ new route */}



        {/* Protected route */}
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

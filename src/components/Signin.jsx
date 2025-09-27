// src/pages/SignInPage.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] mt-8">
      <SignIn path="/signin" routing="path" signUpUrl="/signup" />
    </div>
  );
};

export default SignInPage;

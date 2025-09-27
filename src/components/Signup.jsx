// src/components/Signup.jsx
import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <SignUp 
        path="/signup"
        routing="path"
        signInUrl="/signin"
        afterSignUpUrl="/"   // ✅ redirect after signup
      />
    </div>
  );
};

export default SignUpPage;

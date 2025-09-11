import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="h-[92vh] flex items-center justify-center">
      <SignUp path="/signup" routing="path" signInUrl="/signin" />
    </div>
  );
};

export default SignUpPage;

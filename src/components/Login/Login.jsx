import { useRef, useState } from "react";
import Header from "@/components/Header/Header";
import { validateForm } from "@/utils/validate";
import LoginForm from "@/components/Login/LoginForm";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="banner"
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;

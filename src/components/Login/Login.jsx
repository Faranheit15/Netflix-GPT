import Header from "@/components/Header/Header";
import LoginForm from "@/components/Login/LoginForm";
import { BANNER_IMAGE } from "@/utils/constants";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full overflow-hidden">
        <img
          className="object-cover w-full h-screen"
          src={BANNER_IMAGE}
          alt="banner"
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;

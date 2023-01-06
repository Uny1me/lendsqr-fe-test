import Input from "components/Input";
import logo from "../images/logo.svg";
import illustration from "images/sign-in-illustration.svg";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = (e: Event) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-container__illustration">
        <img src={logo} alt="lendsqr" width={"162px"} />
        <img src={illustration} alt="lendsqr" width={"100%"} />
      </div>
      <div className="login-container__form">
        <div className="login-container__form-images">
          <img src={logo} alt="lendsqr" width={"40%"} />
          <img src={illustration} alt="lendsqr" width={"90%"} />
        </div>
        <h1>Welcome!</h1>
        <p className="form__paragraph">Enter details to login.</p>
        <form action="">
          <Input inputType="email" placeholder="Email" />
          <Input
            inputType={showPassword ? "text" : "password"}
            placeholder="Password"
            addon="SHOW"
            addOnFunction={togglePassword}
          />
          <p className="cta-text">FORGOT PASSWORD?</p>
          <button className="cta-button">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
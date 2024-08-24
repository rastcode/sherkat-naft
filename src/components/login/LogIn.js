import React from "react";
import { MainContext } from "../../context/MainContext";
import "./login.css";
import { useContext, useState } from "react";
import UserLogin from "./UserLogin";
function LogIn() {
  const [user, setUser] = useState({ user: "", pass: "" });
  const [title, setTitle] = useState("نام کاربری و رمز عبور را وارد کنید");
  const { up, setIsLogin } = useContext(MainContext);
  const userPasHandler = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handelLogin = () => {
    user.user === up.u && user.pass === up.p
      ? setIsLogin(true)
      : setTitle("رمز عبور یا نام کاربری اشتباه است");
  };
  return (
    <div className="login-main-container">
      <div className="login-container">
        <p>{title}</p>
        <UserLogin
          name={"user"}
          type={"text"}
          placeholder={"نام کاربری"}
          value={user.user}
          onChange={(e) => userPasHandler(e)}
        />
        <UserLogin
          name={"pass"}
          type={"password"}
          placeholder={"رمز عبور"}
          value={user.pass}
          onChange={(e) => userPasHandler(e)}
        />

        <button className="login-btn" onClick={handelLogin}>
          ورود
        </button>
      </div>
    </div>
  );
}

export default LogIn;

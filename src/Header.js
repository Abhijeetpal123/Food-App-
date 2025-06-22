import { useState } from "react";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/16229601/file/original-6b1a728052819b02f17b15b275d9e233.jpg?resize=400x0"
        />
      </div>
      <div className="nav-items ">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us </li>
          <li>Cart </li>
          
          <button
            className="btnlogin"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

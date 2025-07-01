import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStatus  from "../utils/useStatus";
const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  // console.log("Header Render");
const  onlineStatus = useStatus();
  useEffect(() => {
    // console.log("useeffect called")
  }, []);
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
          <li >
            online Status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link  className="linkcolor" to="/">Home</Link>
          </li>
          <li>
            <Link  className="linkcolor" to="/about">About us </Link>
          </li>
          <li>
            <Link  className="linkcolor" to="/contact">Contact-Us</Link>
          </li>
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

import { Link } from "react-router-dom";
import logo from "../assets/Joan-Logo.png";

export function Navigation() {
  return (
    <>
      <div className="navigate-bar col-2  q">
        <div className="">
          <div className="logo">
            <img src={logo} alt="" width={100} height={100}  id="mylogo"/>
          </div>
          <div className=""> 
            <ul>
              <li>
                {" "}
                <Link to="/">Home </Link>
              </li>
              <li>
                {" "}
                <Link to="/about">About me</Link>
              </li>
              <li>
                {" "}
                <Link to="/projects">My projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

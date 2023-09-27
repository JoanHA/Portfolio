import { Link } from "react-router-dom";
import logo from "../assets/Joan-Logo.png";

export function Navigation() {
  
  return (
    <>
      <header> 
        <div>
          <a href="#">Joan Hurtado</a>
        </div>
        <span>
            <Link to="/">Home</Link>
            <Link to="/about">About / Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </span>
         
      </header>
    </>
  );
}

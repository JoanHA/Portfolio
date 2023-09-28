import { Link } from "react-router-dom";
import logo from "../assets/Joan-Logo.png";

export function Navigation() {

  return (
    <>
      <header id="header"> 
        <div id="first-info">
          <img src={logo} alt="Logo Description" height={70} width={70} />
          <a href="#" id="name">Joan Hurtado</a>
        </div>
        <span>
            <a href="#home">Home</a>
            <a href="#about">About / Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </span>
         
      </header>

    
    </>
  );
}

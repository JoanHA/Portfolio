
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
            <a href="#contenedor">Home</a>
            <a href="#About">About</a>
            <a href="#Project1">Projects</a>
            <a href="#Contact">Contact</a>
          </span>
         
      </header>

    
    </>
  );
}

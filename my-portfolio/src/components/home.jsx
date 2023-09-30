import "../CSS/home.css";
import { Navigation } from "../layouts/navigation";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
export function Home() {
  return (
    <>
      <Navigation />

      <section className="" id="contenedor">
        <div id="socials">
          <a href="">
            <img src={github} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" width={30} />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </div>
        <div id="home">
          <h1> HEY, I'M JOAN HURTADO</h1>
          <p>
            A Backend focused FullStack Developer building the Frontend-Backend
            of Websites and Web Applications that leads to the success of the
            overall product
          </p>

          <button>Get to know me </button>
        </div>
      </section>
      <div id="wave-div">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" id="wave-svg">
        <linearGradient id="mi-degradado" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor: "#d6d6d6"}} />
    <stop offset="100%" style={{ stopColor: "white" }} />
  </linearGradient>
          <path
            d="M-8.17,3.48 C201.75,165.30 349.20,-49.98 543.16,47.88 L500.00,150.00 L0.00,150.00 Z"
            id="wave-path" fill="url(#mi-degradado)"
          ></path>
        </svg>
      </div>
    </>
  );
}

import { lazy, Suspense } from "react";
import "./App.css";
// import { Contact } from "./components/contact";
// import { About } from "./components/about";
// import { Home } from "./components/home";
// import { Projects } from "./components/projects";
// import Footer from "./components/footer";
// import Hidden from "./layouts/hidden";

//Lazy import
const Home = lazy(() => import("./components/home"));
const Contact = lazy(() => import("./components/contact"));
const About = lazy(() => import("./components/about"));
const Projects = lazy(() => import("./components/projects"));
const Footer = lazy(() => import("./components/footer"));
const Hidden = lazy(() => import("./layouts/hidden"));

import "./CSS/navigation.css";

function App() {
  return (
    <>
      <Suspense fallback={<h3 id="charging">Cargando...</h3>}>
        <div>
          <Home />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Hidden />
      </Suspense>
    </>
  );
}

export default App;

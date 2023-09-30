
import "./App.css";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import Footer from "./components/footer";

import "./CSS/navigation.css";

function App() {
  return (
    <>
      <div>
        <Home/>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      
      <Footer/>

    </>
  );
}

export default App;

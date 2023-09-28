import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Navigation } from "./layouts/navigation";
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
    </>
  );
}

export default App;

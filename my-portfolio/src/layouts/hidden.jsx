import React from 'react'
import "../CSS/hidden.css"
export default function Hidden() {

  return (
    <div id='allContainer'> 
            <div id='hiddenContainer'>
                <div className="pageLink"><a href="#contenedor">Home</a></div>
                <div className="pageLink"><a href="#about">About</a></div>
                <div className="pageLink"><a href="#projects">Projects</a></div>
                <div className="pageLink"><a href="#contact">Contact</a></div>
            </div>
    </div>
  )
}

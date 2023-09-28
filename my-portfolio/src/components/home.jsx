import "../CSS/home.css"
import { Navigation } from "../layouts/navigation"
export function Home(){
    return(
            <>
           
            <Navigation />
       
            <section className="container" id="contenedor">
                <div id="socials">
                    Coming soon
                </div>
                    <div id="home">
                        <h1> HEY, I'M JOAN HURTADO</h1>
                        <h3>A Backend focused FullStack Developer building the Frontend-Backend of Websites and Web Applications that leads to the success of the overall product</h3>

                        <button>Contact me</button>
                    </div>
                </section>
                
            </>
        
    )

}
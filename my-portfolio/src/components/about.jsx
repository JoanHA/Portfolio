
import check from "../assets/check.svg";
export function About() {
  return (
    <>
      <section id="about">
        <div className="main-info">
          <h1>About me</h1>
          <p className="h1_border"> </p>
          <p className="self-descripcion">
            Here you will find more information about me, my current skills
            mostly in terms of programming and technology
          </p>
        </div>

        <div className="information">
          <div className="get-know">
            <h3>Get To Know Me!</h3>
            <p> I'm a <strong>Bilingüal FullStack Developer </strong> building desktop Applications, websites, mobile applications and everything related to technology. 
            Check out some of my work in the Projects section.</p>
            <p>  I have also worked with <strong>agile methodologies </strong> like Scrum and Kambam  being the product owner of an e-commerce. I also have knowdledge of information security having a certificate of <strong>information security diagnostician </strong> in accordance with analysis methods and technical regulations using the <strong>ISO 27001</strong>  standard.</p>
            <p>I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me. </p>

          <button>PROJECTS</button>
           
          </div>

          <div id="skills">
            <h3>My Skills</h3>
           
            <div className="front-back">
              <h6>Frontend</h6>
              <div className="skillContainer">
              <span>
                   <img src={check} alt="check-image description" />
                    HTML
                  </span>

                  <span>
                  <img src={check} alt="check-image description" />
                    REACTJS
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    CSS
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    JAVASCRIPT
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    GIT / GITHUB
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    ANDROID (JAVA)
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    JQUERY
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    BOOSTRAP
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    JAVAFX
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    LARAVEL
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    NEXT JS
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    FLUTTER
                  </span>
              </div>
            </div>
            <div className="front-back ">
              <h6>Backend</h6>
              <div className="skillContainer">
              <span>
                  <img src={check} alt="check-image description" />
                    NODE JS
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    NEST JS
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    DJANGO{" "}
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    ORACLE DB
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    MYSQL
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    JAVA
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    PYTHON
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    PHP
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    DART
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    MONGO DB
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    PL/SQL
                  </span>
                  <span>
                  <img src={check} alt="check-image description" />
                    EXPRESS JS
                  </span>
              
              </div>
            </div>
            </div>
           
          </div>
   
      </section>
    </>
  );
}

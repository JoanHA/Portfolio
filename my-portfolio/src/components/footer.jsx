import "../CSS/footer.css";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
export default function Footer() {
  return (
    <section id="footer">
      <div className="main-footer">
        <div className="footer-info">
          <div>
            <h4 className="footerText">Joan Hurtado (FullStack Developer)</h4>
          </div>
          <div>
            <p className="footerText">
              I'm a Bilingüal FullStack Developer building desktop Applications,
              websites, mobile applications and everything related to
              technology.
            </p>{" "}
          </div>
        </div>
        <div className="footer-social">
          <div>
            <h3>Social</h3>
          </div>
          <div className="footer-icons">
            <div className="footer-icon-container">
              <a href="https://www.instagram.com/joan_hurtado19/">
                <img width={40} src={instagram} alt="social-image" />
              </a>
              <a href="https://www.linkedin.com/in/joan-hurtado-a04ab1255/">
                <img width={30} src={linkedin} alt="social-image" />
              </a>
              <a href="https://github.com/JoanHA">
                <img width={40} src={github} alt="social-image" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="copyright">
        <span>
          © Copyright 2023. Made by <strong>Joan Hurtado</strong>
        </span>
      </div>
    </section>
  );
}

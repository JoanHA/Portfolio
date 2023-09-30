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
            <h4>Joan Hurtado (FullStack Developer)</h4>
          </div>
          <div>
            <p>
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
            <div>
              <span><img width={40} src={instagram} alt="social-image" /></span>
              <span><img width={30} src={linkedin} alt="social-image" /></span>
              <span><img width={30} src={github} alt="social-image" /></span>
              <span><img width={30} src={whatsapp} alt="social-image" /></span>
              <span><img width={30} src={email} alt="social-image" /></span>
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

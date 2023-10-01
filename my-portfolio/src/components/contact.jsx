import "../CSS/contact.css";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import arrow from "../assets/arrow.svg";
export function Contact() {
  return (
    <>
    
      <section id="contact" style={{  marginBottom:"180px" }}>
        <div className="main-info">
          <h1 className="main_h1">Contact</h1>
          <p className="h1_border"></p>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="main-form">
          <div className="social-form">
            <h3>Talk to me</h3>
            <div className="social-box">
              <img src={email} alt="here a image" />
              <h6>Email</h6>
              <p className="social-text">joanhurtado134@outlook.es</p>
              <a className="social-send" href="">send me a message  
              <img src={arrow} alt="" className="arrowImg" />
              </a>
            </div>
            <div className="social-box">
              <img src={linkedin} alt="here a image"  id="linkedinImg" width={50}/>
              <h6>LinkedIn</h6>
              <p className="social-text">www.linkedin.com/joan-hurtado</p>
               <a className="social-send" href="https://www.linkedin.com/in/joan-hurtado-a04ab1255">send me a message
               <img src={arrow} alt="" className="arrowImg" />
               </a>
            </div>
            <div className="social-box">
              <img src={whatsapp} alt="here a image" />
              <h6>Whatsapp</h6>
              <p className="social-text">+57 3176201788</p>
              <a className="social-send" href="">send me a message
              <img src={arrow} alt="" className="arrowImg" /></a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send me a message</h3>

            <div className="inputGroup">
              <div className="inputText">
                {" "}
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="inputs-send"
                  placeholder="Your Name Here..."
                  name="name"
                  required
                />
              </div>
              <div className="inputText">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="inputs-send"
                  placeholder="Your Email Here..."
                  name="email"
                  required
                />
              </div>
              <div className="inputText">
                <label htmlFor="">Message</label>
                <textarea
                  placeholder="Your Message Here..."
                  className="inputs-send"
                  required
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button className="btn-send">SEND</button>
            </div>
          </div>
        </div>
      </section >
      
    </>
  );
}

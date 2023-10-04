import "../CSS/contact.css";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import arrow from "../assets/arrow.svg";
import emailjs from "@emailjs/browser"


export function Contact() {


  const  sendEmail = (event)=>{
    event.preventDefault();
    emailjs.sendForm('service_4y9medf','template_m00l0hm',event.target,'uHVXsk4OZ0jSV2qaY')
    .then(response => {
      console.log(response.status)
      if(response.status == 200){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message has been sent!',
          showConfirmButton: false,
          timer: 3000
        }).then(()=>event.target.submit())
        
      }
    })
  
    .catch(erro => console.log(erro))

  }

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
          {/* Formulario */}
          <div className="contact-form">
            <h3>Send me a message</h3>

            <div className="inputGroup">
              <form action="" onSubmit={sendEmail} id="form-contact">
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

              <button className="btn-send align-self-center">SEND <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ marginLeft:"5px", marginBottom:"3px" }} className="bi bi-send " viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg></button>



              </form>
              
            </div>
          </div>
        </div>
      </section >
      
    </>
  );
}

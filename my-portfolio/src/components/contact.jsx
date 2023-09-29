import "../CSS/contact.css";
export function Contact(){
    return(
        <>
        <section id="contact">
            <div className="main-info">
                <h1 className="main_h1">Contact</h1>
                <p className="h1_border"></p>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </div>
            <div className="main-form">
          
                <div className="social-form">
                <h3>Talk to me</h3>
                    <div className="social-box">
                        <img src="" alt="here a image" />
                        <h5>Email</h5>
                        <p>joanhurtado134@outlook.es</p>
                        <a href="">send me a message</a>

                    </div>
                    <div className="social-box">
                    <img src="" alt="here a image" />
                        <h5>LinkedIn</h5>
                        <p>https://www.linkedin.com/in/joan-hurtado-a04ab1255</p>
                        <a href="">send me a message</a>
                    </div>
                    <div className="social-box">
                    <img src="" alt="here a image" />
                        <h5>Whatsapp</h5>
                        <p>+57 3176201788</p>
                        <a href="">send me a message</a>
                    </div>
                </div>
                <div  className="contact-form">
                    <h3>Contact me</h3>

                    <div>
                        <input type="text" value="" placeholder="" required />
                        <input type="text" value="" placeholder="" required />
                        <input type="text" value="" placeholder="" required />
                    </div>

                </div>

            </div>
        </section>
        </>
    )

}
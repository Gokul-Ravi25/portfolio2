import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import github from "../../img/github.png";
import resume from "../../img/resume.pdf";
import coverLetter from "../../img/CoverLetter.pdf";

import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bg120vf",
        "template_qsr42qj",
        formRef.current,
        "user_BkfRDO13T8pAYZDmsbVih"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Reach me on..</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7904945140
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact.gokulravi@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Chennai
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>To reach me. Please Fill the form.</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#222", color:darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#222", color:darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#222" ,color:darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#222" ,color:darkMode && "white"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
      <div className="c-documentsSocial" style={{backgroundColor: darkMode && "#222"}}>
        <div className="resumeCover">
              <a href={resume} download="Gokul Resume.pdf" >
                <button className="c-button">
                  Resume
                </button>
              </a>
              <a href={coverLetter} download="Gokul CoverLetter.pdf" >
                <button className="c-button">
                  Cover Letter
                </button>
              </a>
        </div>
        
        <div className="c-social">
          <a href="https://linkedin.com/in/gokul-r-b8912518b/" rel="noreferrer" target="_blank" className="c-socialMedia">
            <img src={linkedin} alt="" className="c-icon" />
            Linkedin
          </a>
          <a href="https://github.com/Gokul-Ravi25" rel="noreferrer" target="_blank" className="c-socialMedia">
          <img src={github} alt="" className="c-icon" />
            Github
          </a>
          <a href="https://www.instagram.com/the.gokul.ravi/" rel="noreferrer" target="_blank" className="c-socialMedia">
          <img src={instagram} alt="" className="c-icon" />
            Instagarm
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;

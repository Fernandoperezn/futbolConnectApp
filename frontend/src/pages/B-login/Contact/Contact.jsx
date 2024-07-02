import React from 'react';
import bgImg from '../../../assets/foto9.jpg'
import bgImg02 from '../../../assets/balon.png'
import './contact.css'
import NavBar from '../../../components/NavBar/NavBar';

const ContactForm = () => {
  return (
    <>
      <NavBar />
      <div className="contact-img" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="contact-form-container">

          <div className="form-left">
            <img className="img-fluid rounded col-10" src={bgImg02} alt="left-img" />
          </div>
          <div className="form-right">
            <h1>Contactanos atra</h1>
            <p>We'd love to hear from you!</p>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

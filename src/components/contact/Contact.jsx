import React, { useRef } from 'react'
import './Contact.css'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g1rbscd', 'template_wjgkxrb', form.current, 'Ldr8ImmVHCl7Y5MWu');
      e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <div className="container contact__container">
        <div className="contact__options">                 
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>            
            <a href="https://m.me/mohamed.musa.737/" target="_blank">Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>            
            <a href=" https://wa.me/33624512552" target="_blank">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="name" placeholder="Votre Nom" required />
        <input type="text" name="mail" placeholder="Votre Mail" required />
        <textarea name="message" row="7" placeholder="Votre Message" required/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
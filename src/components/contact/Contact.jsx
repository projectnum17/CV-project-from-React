import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_szdliwn', 'template_0i8j8lp', form.current, 'g6t8r4TXGZUpHr6Af')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon ' />
            <h4>E-mail</h4>
            <h5>egor.cgornyy@gmail.com</h5>
            <a href="mailto:egor.cgornyy@gmail.com" target='__blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon ' />
            <h4>Telegram</h4>
            <h5>+38 (098) 104-12-02</h5>
            <a href="https://t.me/oldkentucky" target='__blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon ' />
            <h4>Messenger</h4>
            <h5>oldkentucky</h5>
            <a href="https://t.me/oldkentucky" target='__blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your E-mail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
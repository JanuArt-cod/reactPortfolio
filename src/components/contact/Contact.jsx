import React from 'react'
import './contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'    
import {BsWhatsapp} from 'react-icons/bs'    
import {RiMessengerFill} from 'react-icons/ri'    

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>januarramdhani5@gmail.com</h6>
            <a href='mailto:januarramdhani5@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h6>+62 85697286185</h6>
            <a href='https://wa.me/qr/I7VJT2FILLPVP1'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h6>Januar Ramadhani</h6>
            <a href='https://m.me/jancoek.januar'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACTION */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Massage' required></textarea>
          <botton type='submit' className='btn btn-primary'>Send Message</botton>
        </form>
      </div>
    </section>
  )
}

export default Contact
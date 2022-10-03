import React, { useEffect } from 'react'
import './Contact.css'
import Aos from "aos"
import "aos/dist/aos.css"

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div id="contact" class="contact-in">
            <div data-aos="fade-up" class="contact-form">
                <h1>Contact Me</h1>
                <form action="https://formsubmit.co/Adrian_BC@aol.com" method="POST">
                    <input type="text" placeholder="Name" className='contact-form-txt' required/>
                    <input type="email" name="email" placeholder="Email" className='contact-form-txt' required/>
                    <textarea name="message" placeholder="Write your message here" className='contact-form-textarea'></textarea>
                    <input type="submit" name="Submit" className='contact-form-btn' />
                    <input type="hidden" name="_next" value="https://www.adriancbutler.com/"></input>
                </form>
            </div>
            <div class="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388346.5398413387!2d-74.11975668359342!3d40.49832632403391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1654138372353!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0" />
            </div>
        </div>
    )
}

export default Contact
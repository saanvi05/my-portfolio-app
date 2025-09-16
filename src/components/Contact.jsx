// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-description">
                Have a question or want to work together? Leave your details and I'll
                get back to you as soon as possible.
            </p>
            <form
                action="https://formspree.io/f/xqadegvg" 
                method="POST"
                className="contact-form"
            >
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn primary-btn">
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default Contact;

import React from 'react';

function ContactForm() {
    return (
        <li>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input rows="6" name="message" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </li>
    )
}

export default ContactForm;
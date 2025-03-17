import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Css/Contact.css';
import Navbar from '../components/Navbar';
import Chatbot from '../components/ChatBot';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hubyxvz', 'template_9av7ffw', form.current, {
        publicKey: '5cKAsUaWvma9XlziF',
      })
      .then(
        () => {
          setNotification({ type: 'success', message: 'Message sent successfully!thanks for connecting' });
          form.current.reset();
        },
        (error) => {
          setNotification({ type: 'error', message: 'Failed to send message. Please try again.' });
          console.error('FAILED...', error.text);
        }
      );
  };

  return (

    <div className='conact-page'>
      <Navbar />
      <h1>Contact Us</h1>
      <div className="contact-container">
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" required />
            <label>Address</label>
            <input type="text" name="address" required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Client Details</label>
            <textarea name="message" rows="2" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send</button>
          {notification && <p className="status-message">{notification.message}</p>}
        </form>
      </div>
      <Newsletter />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;

import React from "react";
import "../Css/Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* About Section */}
      <div className="footer-sec">
        <h3>About Us</h3>
        <p>We provide the best services to help you achieve your goals. Stay connected with us.</p>
      </div>

      {/* Quick Links */}
      <div className="footer-sec">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer-sec">
        <h3>Contact</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main Street, City</p>
      </div>

      {/* Social Media Links */}
      <div className="footer-sec">
        <h3>Follow Us</h3>
        <div>
          <a href="#" target="_blank">Facebook</a> | 
          <a href="#" target="_blank"> X</a> | 
          <a href="#" target="_blank"> Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "../css/Gallery.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Chatbot from "../components/ChatBot";

const images = [
  "mental-wellness.jpg", "exercise.jpg", "health-monitoring.jpg", "transportation.jpg", 
  "meal-assistance.jpg", "companionship.jpg","mental-wellness.jpg", "exercise.jpg", "health-monitoring.jpg", "transportation.jpg", 
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      < Navbar />
      <h1>Our Gallery</h1>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(img)}>
            <img src={`/images/${img}`} alt={`Gallery ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={`/images/${selectedImage}`} alt="Selected" />
            <button onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
      <Newsletter/>
      <Footer />
      <Chatbot/>
    </section>
  );
};

export default Gallery;

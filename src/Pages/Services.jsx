import React, { useState } from "react";
import "../css/Services.css";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Chatbot from "../components/ChatBot";

const services = [
    { icon: "companionship.jpg", title: "24/7 Companionship", desc: "Providing emotional support and company to the elderly." },
    { icon: "meal-assistance.jpg", title: "Meal Assistance", desc: "Helping with meal preparation and dietary needs." },
    { icon: "transportation.jpg", title: "Transportation Support", desc: "Assisting with travel to medical appointments and errands." },
    { icon: "health-monitoring.jpg", title: "Health Monitoring", desc: "Ensuring regular health check-ups and medication reminders." },
    { icon: "exercise.jpg", title: "Physical Activities", desc: "Encouraging daily exercise and movement for better health." },
    { icon: "mental-wellness.jpg", title: "Mental Wellness", desc: "Providing activities and support for cognitive and emotional well-being." }
];

const OurServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="services-section">
            <Navbar />
            <h2>Our Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${hoveredIndex === index ? "hovered" : ""}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setSelectedService(service)}
                    >
                        <div className="service-icon">
                            <img src={`/images/${service.icon}`} alt={service.title} className="service-img" />
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                    </div>
                ))}
            </div>
            {selectedService && (
                <div className="service-details">
                    <h3>{selectedService.title}</h3>
                    <p>{selectedService.desc}</p>
                    <button onClick={() => setSelectedService(null)}>Close</button>
                </div>
            )}

            <Newsletter />
            <Footer />
            <Chatbot/>
        </section>
    );
};

export default OurServices;

import React, { useState, useEffect, useRef } from "react";
import "../css/ChatBot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "what services do you offer": "We provide companionship, meal assistance, health monitoring, transportation, and exercise guidance for the elderly.",
    "how to contact support": "You can contact support via our Contact Us page or call our helpline at 123-456-7890.",
    "where can i find health tips": "You can check our Health & Wellness section on the website for tips on elderly care.",
    "do you provide meal assistance": "Yes, we provide meal planning and assistance to ensure a healthy diet.",
    "can i get transportation services": "Absolutely! We assist with transportation for medical visits, shopping, and social outings.",
    "how to navigate the website": "Use the navigation bar at the top or click on the menu icon to find different sections of the site.",
    "how to book a service": "You can book a service through our website by visiting the Services section and filling out a request form.",
    "who are the caretakers": "Our caretakers are trained professionals dedicated to providing compassionate care for the elderly.",
    "can i schedule an appointment": "Yes! You can schedule an appointment through our website or by calling our support line.",
    "what are the exercise options": "We offer guided exercises, yoga sessions, and light physical activities to promote wellness.",
    "do you offer emergency support": "Yes, we provide emergency assistance 24/7. Please call our emergency number if needed.",
    "how to edit my profile": "You can edit your profile in the Account Settings section after logging in.",
    "how to change my password": "Go to Account Settings > Change Password to update your credentials.",
  };

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    addMessage(input, "user");
    setInput("");

    setTimeout(() => {
      const response = responses[input.toLowerCase()] || "I'm sorry, I don't understand that. Can you try rephrasing?";
      addMessage(response, "bot");
    }, 1000);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot-wrapper">
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        💬 Chat
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="close-button">✖</button>
          </div>
          <div className="chatbot-messages" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

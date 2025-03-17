import React, { useEffect, useState } from "react";
import { FaUserCheck, FaUserTie, FaClock, FaSmile } from "react-icons/fa";
import "../css/StatsSection.css"; // Import the CSS file

const StatCard = ({ icon: Icon, endValue, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = endValue / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 50);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <div className="stat-card">
      <Icon className="stat-icon" />
      <h2 className="stat-number">{count}+</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: FaUserCheck, endValue: 1000, label: "Happy Clients" },
    { icon: FaUserTie, endValue: 100, label: "Professionals" },
    { icon: FaClock, endValue: 10, label: "Years of Service" },
    { icon: FaSmile, endValue: 100, label: "Satisfaction (%)" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;

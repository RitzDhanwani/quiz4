// components/welcome/Welcome.js
import React from 'react';
import './Welcome.css'; // You can create a CSS file for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to Our App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Integer eget ante euismod, lobortis tortor id, sodales nunc.
        </p>
      </div>
      <div className="welcome-image">
        <img src="/path/to/your/image.jpg" alt="Welcome" />
      </div>
    </div>
  );
};

export default Welcome;

// src/components/Mission.js
import React from 'react';
import './Content.css'; // Create Mission.css for styling
import contentImage from '../assets/content.png';

const Mission = () => {
  return (
    <section id='home'>
    <div className="mission-container">
      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          An Environmental Conservation Organization is dedicated to
          safeguarding the planet by addressing environmental issues like
          climate change, deforestation, and pollution. Through research,
          advocacy, and on-the-ground initiatives, these organizations aim
          to raise awareness, implement conservation strategies, and
          influence policies for sustainable resource management.
          Collaborating with governments and communities, they work towards
          fostering a collective effort for a healthier and more balanced
          coexistence between humanity and the environment.
        </p>
      </div>
      <div className="mission-image">
        <img src={contentImage} alt="Environmental Conservation" />
      </div>
    </div>
    </section>
  );
};

export default Mission;

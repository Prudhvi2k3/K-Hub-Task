/* eslint-disable jsx-a11y/anchor-is-valid */
// CardGrid.js

import React from 'react';
import './Cards.css'; // Make sure to import your CSS file
import volcano from '../assets/volcano.png';
import mountain from '../assets/mountain.png';
import ocean from '../assets/ocean.png';
import forest from '../assets/forest.png';

const Cards = () => {
  return (
    <section id='cards'>
      <h1 align='center'>Cards</h1>
    <section className="hero-section">
      <div className="card-grid">
        <a className="card">
          <div className="card__background" style={{ backgroundImage: `url(${volcano})` }}></div>
          <div className="card__content">
            <p className="card__category">Volcano Card</p>
            <h3 className="card__heading">Guardians of Earth</h3>
          </div>
        </a>
        <a className="card">
          <div className="card__background" style={{ backgroundImage: `url(${mountain})` }}></div>
          <div className="card__content">
            <p className="card__category">Mountain Card</p>
            <h3 className="card__heading">Frozen Majesty</h3>
          </div>
        </a>
        <a className="card">
          <div className="card__background" style={{ backgroundImage: `url(${ocean})` }}></div>
          <div className="card__content">
            <p className="card__category">Ocean Card</p>
            <h3 className="card__heading">Life Beneath Waves</h3>
          </div>
        </a>
        <a className="card">
          <div className="card__background" style={{ backgroundImage: `url(${forest})` }}></div>
          <div className="card__content">
            <p className="card__category">Forest Card</p>
            <h3 className="card__heading">Sylvan Heaven</h3>
          </div>
        </a>
      </div>
    </section>
    </section>
  );
};

export default Cards;

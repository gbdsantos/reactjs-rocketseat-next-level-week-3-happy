import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img alt="Happy" src={logoImg} />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <a className="enter-app" href="">
          <FiArrowRight color="rgba(0, 0, 0, 0.6" size={26} />
        </a>
      </div>
    </div>
  );
}

export default Landing;
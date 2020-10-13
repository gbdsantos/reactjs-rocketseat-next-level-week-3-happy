import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img alt="Happy" src={mapMarkerImg} />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

          <footer>
            <strong>São Paulo</strong>
            <span>Taboão da Serra</span>
          </footer>
        
      </aside>

      <div></div>

      <Link className="create-orphanage" to="">
        <FiPlus color="#FFF" size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
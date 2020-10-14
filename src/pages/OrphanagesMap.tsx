import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

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

      <Map 
        center={[-23.6517833,-46.7962328]}
        style={{ height: '100%', width: '100%' }}
        zoom={15}
      > 
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link className="create-orphanage" to="">
        <FiPlus color="#FFF" size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Marker, Map, Popup, TileLayer } from 'react-leaflet';

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import mapIcon from '../utils/mapIcon';
import mapMarkerImg from '../images/map-marker.svg';

import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  console.log(orphanages);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

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
        center={[-23.6517833, -46.7962328]}
        style={{ height: '100%', width: '100%' }}
        zoom={15}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-23.6517833, -46.7962328]}>
          <Popup
            className="map-popup"
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight color="#FFF" size={20} />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link className="create-orphanage" to="/orphanages/create">
        <FiPlus color="#FFF" size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

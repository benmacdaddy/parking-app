import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import 'mapbox-gl/dist/mapbox-gl.css';
import '../App.css';
// import '../App.css.map';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl  
} from 'react-map-gl';
import Pin from '../pin';

import '../index.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Container, Row, Col} from 'react-bootstrap'

function MapBox() {
  const [inputs, setInputs] = useState({});
  const [parking, setParking] = useState({"longitude": 114.17016, "latitude": 22.33581});

  const handleDrag = (event) => {
    let longitude = event.lngLat.lng;
    let latitude = event.lngLat.lat;
    setParking(() => ({"longitude": longitude, "latitude": latitude}));
    console.log(event);
  }

  return (
    <div className="map-container">
      <Map
              initialViewState={{
                latitude: 22.33581,
                longitude: 114.17016,
                zoom: 10.5,
                bearing: 0,
                pitch: 0
              }}
              mapStyle="mapbox://styles/mapbox/dark-v9"
              mapboxAccessToken={ process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            >
              <Marker
                  longitude={parking.longitude}
                  latitude={parking.latitude}
                  anchor="bottom"
                  draggable
                  onDragEnd={handleDrag}
                >
                  <Pin size={20} />
                </Marker>
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />
            </Map>
    </div>
  );
}

export default MapBox;
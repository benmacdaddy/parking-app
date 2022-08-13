import logo from './logo.svg';
import './App.css';
import { useRef, useEffect, useState } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Container, Row, Col} from 'react-bootstrap'
import About from './About';
import NavBar from './NavBar'
import Header from './Header'
import Intro from './Intro'
import Form from './Form'
import MapBox from './MapBox.jsx'
import SearchBar from './SearchBar'
//import About from './routes/AboutUs.jsx';

import { onChildAdded, push, ref, set } from "firebase/database";
import { database } from "./firebase";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {

  const [inputs, setInputs] = useState({});
  const [parking, setParking] = useState({"longitude": 114.17016, "latitude": 22.33581});

  const handleDrag = (event) => {
    let longitude = event.lngLat.lng;
    let latitude = event.lngLat.lat;
    setParking(() => ({"longitude": longitude, "latitude": latitude}));
    console.log(event);
  }

    return (
      <div>
        <NavBar/>
        <Header/>
          <div class="container">
            <div class="row">
              <Col xs={12} sm={12} md={12}>
              <Intro/>
              <Form/>
              </Col>
          <Col xs={12} md={12} id="map">
            <SearchBar/>
            <MapBox/>
          </Col>
        </div>
        </div>
      </div>
    );
  }

export default App;

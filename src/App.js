import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl  
} from 'react-map-gl';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Container, Row, Col} from 'react-bootstrap'
import * as IconName from "react-icons/bs";
import About from './About';

import ControlPanel from './control-panel';
import Pin from './pin';

const TOKEN = 'TOKEN';

const App = () => {

  const [inputs, setInputs] = useState({});
  const [parking, setParking] = useState({"longitude": 114.17016, "latitude": 22.33581});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const handleDrag = (event) => {
    let longitude = event.lngLat.lng;
    let latitude = event.lngLat.lat;
    setParking(() => ({"longitude": longitude, "latitude": latitude}));
    console.log(event);
  }

    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <a
           href="#"
           class="navbar-brand mb-0 h1">
            <div class="px-3">
            <IconName.BsColumns/>
            </div>
          </a>
          <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          class="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a href="#" class="nav-link active">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Features
                  </a>
                 </li>
                 <li class="nav-item">
                   <a href="#" class="nav-link">
                     About us
                   </a>
                 </li>
              </ul>
              {/* <form class="form-inline ml-auto my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-light" type="submit">Search</button>
              </form> */}
          </div>
        </nav>
          <h1 className="header" class="container text-center py-3 display-4">THE HONG KONG PARKING APP</h1>
          <div class="p-1 bg-dark w-100 mt-3 mb-4"></div>
          <div class="container">
            <div class="row">
              <Col xs={12} sm={12} md={12}> 
                <h5> 
                This app allows you to record your parking tickets conveniently through a handy form:
                </h5>
                <ol class="list-group list-group-numbered mb-3">
                  <li class="list-group-item">Manage your payment for parking tickets</li>
                  <li class="list-group-item">Record time and geospatial data for tracking</li>
                  <li class="list-group-item">Predictive analytics for parking trends</li>
                </ol>
                <hr class="hr-text" data-content="FORM"/>
                <h5 class="mt-3 mb-3">
                  Please enter the details of your ticket:
                </h5>
                <form onSubmit={handleSubmit}>
                  <div class="input-group mt-3 mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="input-group mt-3 mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">License plate</span>
                    <input type="text" class="form-control" name="licenseplate" value={inputs.licenseplate || ""} onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div class="mt-3 mb-3">
                    <label for="date">Date</label>
                    <input id="date" class="form-control" name="date" value={inputs.date || ""} onChange={handleChange} type="date" />
                    <span id="startDateSelected"></span>
                  </div>
                  <div class="mt-3 mb-3">
                    <label for="time">Time</label>
                    <input id="time" class="form-control" name="time" value={inputs.time || ""} onChange={handleChange} type="time"  />
                    <span id="startDateSelected"></span>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="reminder" value={inputs.reminder || ""} onChange={handleChange} id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      I would like to create a calendar reminder for payment
                    </label>
                  </div>
                  <select class="form-select mt-3 mb-3" aria-label="Default select example" name="reminderDay" value={inputs.reminderDay || ""} onChange={handleChange}>
                    <option selected>Reminder on which day prior to payment date</option>
                    <option value="1">One day</option>
                    <option value="2">Two days</option>
                    <option value="3">Three days</option>
                  </select>
                  <div class="mt-3 mb-3">
                    <em>Now please drag the marker to where your car is parked → </em>
                  <div class="mt-3 mb-3">Currently parked in longitude {parking.longitude.toFixed(2)} and latitude {parking.latitude.toFixed(2)}</div>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg mb-5" >Submit</button>
                </form>
              </Col>
          <Col xs={12} md={8} id="map">
            <Map
              initialViewState={{
                latitude: 22.33581,
                longitude: 114.17016,
                zoom: 10.5,
                bearing: 0,
                pitch: 0
              }}
              mapStyle="mapbox://styles/mapbox/dark-v9"
              mapboxAccessToken={TOKEN} 
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
                <ControlPanel />
            </Map>
          </Col>
        </div>
        </div>
      </div>
    );
  }

export default App;

import '../App.css';
import '../index.css';
import { useEffect, useState } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Container, Row, Col} from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Form from '../components/TicketForm'
import MapBox from '../components/MapBox.jsx'
import SearchBar from '../components/SearchBar'
import TicketsRecord from '../components/TicketsRecord'

const TicketsPage = () => {

  //const [inputs, setInputs] = useState({});
  //const [parking, setParking] = useState({"longitude": 114.17016, "latitude": 22.33581});

  // const handleDrag = (event) => {
  //   let longitude = event.lngLat.lng;
  //   let latitude = event.lngLat.lat;
  //   setParking(() => ({"longitude": longitude, "latitude": latitude}));
  //   console.log(event);
  // }

  async function addTicketHandler(ticket) {
    console.log("Submit button click appjs")
    const response = await fetch(process.env.REACT_APP_DATABASEURL_FETCH_TICKETS, {
      method: 'POST',
      body: JSON.stringify(ticket),
    });
    const data = await response.json();
    console.log(data);
  }

    return (
      <div>
        <NavBar/>
        <Header/>
          <div class="container">
            <div class="row">
              <Col xs={12} sm={12} md={12}>
              <TicketsRecord/>
              <Form onAddTicket={addTicketHandler}/>
              </Col>
          <Col xs={16} md={12} id="map">
            <SearchBar/>
            <MapBox/>
          </Col>
        </div>
        </div>
      </div>
    );
  }

export default TicketsPage;

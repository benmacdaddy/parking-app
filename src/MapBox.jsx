import React, { useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl  
} from 'react-map-gl';
import Pin from './pin';
import ControlPanel from './control-panel';

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
    <div>
      <Map
              initialViewState={{
                latitude: 22.33581,
                longitude: 114.17016,
                zoom: 10.5,
                bearing: 0,
                pitch: 0
              }}
              mapStyle="mapbox://styles/mapbox/dark-v9"
              mapboxAccessToken="pk.eyJ1IjoiYmVubWFjZGFkZHkiLCJhIjoiY2w1M2Q1Mmc5MG9lZzNrcHAydHBnM2IzMSJ9.PUizVEOiNdtqCvgq5vhR6g"
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
                {/* <ControlPanel /> */}
            </Map>
    </div>
  );
}

export default MapBox;
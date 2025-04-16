import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DisasterMap = () => {
  const [disasters, setDisasters] = useState([]);
  const [floods, setFloods] = useState([]);
  const [affectedLocationInfo, setAffectedLocationInfo] = useState([]);

  const floodIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1684/1684445.png",
    iconSize: [32, 32],
  });

  const currLocationIcon = new L.Icon({
    iconUrl:
      "https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_1-512.png",
    iconSize: [35, 35],
  });



  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        const disatserData = data.features.map((feature) => feature);
        setDisasters(disatserData);
      })
      .catch((err) => console.error("Error fetching disasters:", err));

    fetch("https://environment.data.gov.uk/flood-monitoring/id/floods")
      .then((res) => res.json())
      .then((data) => {
        const floodData = data.items.map((item) => item);
        setFloods(floodData);
      });
      
  }, []);

  useEffect(() => {
    try {
      floods.map((item) => {
        const place = item.eaAreaName;
        fetch(`https://nominatim.openstreetmap.org/search?q=${"Odisha"}&format=json`)
          .then((res) => res.json())
          .then(res => {
            console.log(res);
            return setAffectedLocationInfo(res)
          });
      });
    } catch (error) {
      console.log(error);
    }
  }, [floods])


  return (
    <MapContainer
      center={[50, 30]}
      zoom={1}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {disasters.map((disaster, index) => (
        <Marker
          key={index}
          position={[
            disaster.geometry.coordinates[1],
            disaster.geometry.coordinates[0],
          ]}
          icon={floodIcon}
        >
          <Popup>
            <div>
              <h1>{disaster.properties.place}</h1>
              <p>{new Date(disaster.properties.time).toDateString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <Marker position={[20.296, 85.8246]} icon={currLocationIcon}>
        <Popup>
          <div>Current Location</div>
        </Popup>
      </Marker>
      {affectedLocationInfo.map((loc, index) => {
        return (
          <Marker
            position={[loc.lat, loc.lon]}
            icon={currLocationIcon}
            key={index}
          >
            <Popup>
              <div>{loc.name}</div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default DisasterMap;

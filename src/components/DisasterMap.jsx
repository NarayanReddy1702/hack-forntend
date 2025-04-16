import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DisasterMap = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [dataOfDisaster,setDataOfDisaster]=useState([])



  
 
  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Disaster data:", data);
        const disatserData = data.features.map((feature) => feature);
        setDisasters(disatserData);
        setDataOfDisaster(data)
      })
      .catch((err) => console.error("Error fetching disasters:", err));
      
  }, []);
  
 
  console.log(dataOfDisaster);
  
  
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={1}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {disasters.length===0?console.log("There is no data Yet ")
      : disasters.map((disaster, index) => (
        <Marker
        
        position={[disaster.geometry.coordinates[1], disaster.geometry.coordinates[0]]}
          key={index}>
          <Popup>
            <div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DisasterMap;
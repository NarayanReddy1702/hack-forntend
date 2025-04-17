import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const shelters = [
  {
    name: "Govt. High School Shelter",
    latitude: 17.385,
    longitude: 78.4867,
    area: "Hyderabad, Telangana",
  },
  {
    name: "Community Hall, Bhubaneswar",
    latitude: 20.2961,
    longitude: 85.8245,
    area: "Bhubaneswar, Odisha",
  },
  {
    name: "Flood Relief Center, Patna",
    latitude: 25.5941,
    longitude: 85.1376,
    area: "Patna, Bihar",
  },
  {
    name: "Primary School Evacuation Point",
    latitude: 28.7041,
    longitude: 77.1025,
    area: "Delhi",
  },
];


 const shelterIcon = new L.Icon({
     iconUrl: "https://cdn-icons-png.freepik.com/512/5973/5973800.png",
     iconSize: [32, 32],
   });
 

const SafeShelters = () => {
  return (
    <div className="lg:px-49 px-6 py-6 mx-auto bg-black">
      <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6">
        🏠 Safe Shelters Nearby
      </h1>
      <p className="text-gray-600 mb-4">
        In case of an emergency, you can go to one of the following safe
        shelters:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  mb-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shelters.map((shelter, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-4  pl-6 bg-gray-800 hover:shadow-xl hover:border-1 hover:border-white transition"
          >
            <h2 className="text-xl font-semibold text-white mb-1">
              {shelter.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{shelter.area}</p>
            <p className="text-sm text-gray-400">
              📍 Lat: {shelter.latitude}, Lon: {shelter.longitude}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${shelter.latitude},${shelter.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-white mb-6">🗺️ Shelter Locations Map</h2>
      <div className="h-[500px] rounded-2xl flex items-center justify-center overflow-hidden shadow-md">
      <MapContainer
          center={[22.9734, 78.6569]} // Central India coordinates
          zoom={5}
          scrollWheelZoom={true}
          className="h-full w-full lg:w-[70vw] rounded-2xl"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {shelters.map((shelter, index) => (
            <Marker
              key={index}
              position={[shelter.latitude, shelter.longitude]}
              icon={shelterIcon}
            >
              <Popup>
                <strong>{shelter.name}</strong><br />
                {shelter.area}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </div>
    </div>
  );
};

export default SafeShelters;

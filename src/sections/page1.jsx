// Page1.jsx
import React, { useState, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import DisasterMap from "../components/Leaflet.jsx";

function Page1() {
  // State for alerts
  const [alerts, setAlerts] = useState([]);
  const [floods, setFloods] = useState([]);
  const [disasters, setDisasters] = useState([]);

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
  }, []);

  useEffect(() => {
    fetch("https://environment.data.gov.uk/flood-monitoring/id/floods")
      .then((res) => res.json())
      .then((data) => {
        const floodData = data.items.map((item) => item);
        setFloods(floodData);
      });
  }, []);

  return (
    <div className="bg-black font-sans text-gray-800">
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <section className="md:col-span-2 bg-gray-800 text-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">🌍 Live Disaster Map</h2>
          <div className="w-full h-80">
            <DisasterMap />
          </div>
        </section>

        <section
          className="bg-gray-800 rounded-2xl text-white shadow-xl p-6 h-110 overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <h2 className="text-xl font-semibold mb-4">🚨 Latest Alerts</h2>
          <ul id="alert-list" className="space-y-3 text-sm h-full">
            {floods.map((flood, index) => (
              <li key={index} className="border-l-4 border-red-500 pl-3">
                <div className="font-semibold">– {flood.eaAreaName}</div>
                <div className="text-gray-600 text-xs">
                  {flood.severityLevel} • {flood.timeRaised}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <section className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-800 rounded-2xl text-white shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">📊 Quick Stats</h2>
          <ul className="space-y-2 text-sm">
            <li>
              🌐 Active Disasters:{" "}
              <span className="font-medium">
                {floods.length + disasters.length}
              </span>
            </li>
            <li>
              🌪 Most Affected Region:{" "}
              <span className="font-medium">South Asia</span>
            </li>
            <li>
              👥 People Affected:{" "}
              <span className="font-medium">1.2 million+</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-2xl text-white shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">🛠 Emergency Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                📞 Emergency Hotlines
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                🏠 Find Safe Shelters
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                🩺 First Aid Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                🤝 Relief Organizations
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Page1;

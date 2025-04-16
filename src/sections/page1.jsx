// Page1.jsx
import React, { useState, useEffect } from 'react';
import GoogleMap from '../components/GoogleMap';

function Page1() {
  // State for alerts
  const [alerts, setAlerts] = useState([
    { type: 'Earthquake', location: 'Japan', severity: '6.8 Magnitude', time: '5 min ago' },
    { type: 'Flood', location: 'Indonesia', severity: 'Severe', time: '12 min ago' },
    { type: 'Wildfire', location: 'California, USA', severity: 'Spreading Fast', time: '25 min ago' },
  ]);

  return (
    <div className="bg-black font-sans text-gray-800">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">

        {/* Live Map Section */}
        <section className="md:col-span-2 bg-gray-800 text-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">🌍 Live Disaster Map</h2>
          <div className="w-full h-72 bg-gray-900 rounded-xl flex items-center justify-center text-gray-500">
           <GoogleMap/>
          </div>
        </section>

        {/* Alerts Panel */}
        <section className="bg-gray-800 rounded-2xl text-white shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">🚨 Latest Alerts</h2>
          <ul id="alert-list" className="space-y-3 text-sm">
            {alerts.map((alert, index) => (
              <li key={index} className="border-l-4 border-red-500 pl-3">
                <div className="font-semibold">{alert.type} – {alert.location}</div>
                <div className="text-gray-600 text-xs">{alert.severity} • {alert.time}</div>
              </li>
            ))}
          </ul>
        </section>

      </main>

      {/* Secondary Info Panels */}
      <section className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* Quick Stats */}
        <div className="bg-gray-800 rounded-2xl text-white shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">📊 Quick Stats</h2>
          <ul className="space-y-2 text-sm">
            <li>🌐 Active Disasters: <span className="font-medium">12</span></li>
            <li>🌪 Most Affected Region: <span className="font-medium">South Asia</span></li>
            <li>👥 People Affected: <span className="font-medium">1.2 million+</span></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-gray-800 rounded-2xl text-white shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">🛠 Emergency Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-blue-600 hover:underline">📞 Emergency Hotlines</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">🏠 Find Safe Shelters</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">🩺 First Aid Guides</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">🤝 Relief Organizations</a></li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default Page1;

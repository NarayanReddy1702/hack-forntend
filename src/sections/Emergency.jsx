import React, { useState, useEffect } from 'react';

const Emergency = () => {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [alertData, setAlertData] = useState({});

  // Simulated alert trigger
  useEffect(() => {
    // You can simulate delay, real-time, or user-triggered alert
    const timer = setTimeout(() => {
      setAlertData({
        event: 'Severe Thunderstorm Warning',
        description: 'Strong winds and heavy rain expected. Stay indoors.',
        urgency: 'Immediate',
        severity: 'Severe',
        area: 'Delhi NCR',
        start: new Date().toLocaleString(),
        end: new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleString() // +2 hrs
      });
      setIsAlertActive(true);
    }, 2000); // 2-second delay for simulating real-time

    return () => clearTimeout(timer);
  }, []);

  if (!isAlertActive) return null;

  return (
    <div className="bg-red-50 border border-red-300 p-6 rounded-2xl shadow-md max-w-3xl mx-auto mt-8 animate-pulse">
      <h2 className="text-2xl font-bold text-red-700 mb-3 flex items-center gap-2">
        🚨 {alertData.event}
      </h2>

      <p className="text-gray-800 mb-3">{alertData.description}</p>

      <div className="bg-red-100 text-red-800 border border-red-200 p-4 rounded-lg text-sm space-y-1">
        <p><strong>Urgency:</strong> {alertData.urgency}</p>
        <p><strong>Severity:</strong> {alertData.severity}</p>
        <p><strong>Area:</strong> {alertData.area}</p>
        <p><strong>Start:</strong> {alertData.start}</p>
        <p><strong>End:</strong> {alertData.end}</p>
      </div>

      <div className="mt-5">
        <a
          href="tel:112"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow transition"
        >
          📞 Call Emergency Services
        </a>
      </div>
    </div>
  );
};

export default Emergency;

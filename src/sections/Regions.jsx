import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle, FaMapMarkerAlt, FaUsers, FaTemperatureHigh } from 'react-icons/fa';

const Regions = () => {
  const [regions] = useState([
    {
      id: 1,
      name: 'North America',
      activeAlerts: 3,
      population: '579 million',
      riskLevel: 'Medium',
      disasters: [
        { type: 'Wildfire', location: 'California', severity: 'High', time: '2 hours ago' },
        { type: 'Hurricane', location: 'Florida', severity: 'Medium', time: '5 hours ago' }
      ]
    },
    {
      id: 2,
      name: 'Asia Pacific',
      activeAlerts: 5,
      population: '4.3 billion',
      riskLevel: 'High',
      disasters: [
        { type: 'Earthquake', location: 'Japan', severity: 'High', time: '1 hour ago' },
        { type: 'Flood', location: 'Indonesia', severity: 'Medium', time: '3 hours ago' }
      ]
    },
    {
      id: 3,
      name: 'Europe',
      activeAlerts: 2,
      population: '746 million',
      riskLevel: 'Low',
      disasters: [
        { type: 'Flood', location: 'Germany', severity: 'Medium', time: '4 hours ago' }
      ]
    },
    {
      id: 4,
      name: 'South America',
      activeAlerts: 4,
      population: '422 million',
      riskLevel: 'Medium',
      disasters: [
        { type: 'Landslide', location: 'Brazil', severity: 'High', time: '1 hour ago' },
        { type: 'Volcano', location: 'Chile', severity: 'Medium', time: '6 hours ago' }
      ]
    }
  ]);


   

  const getRiskLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Global Regions <span className='text-blue-600'> Overview</span></h1>
          <p className="text-xl text-gray-600">Monitor disaster alerts and statistics across different regions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {regions.map((region) => (
            <div key={region.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-blue-600">{region.name}</h2>
                  <span className={`px-3 py-1 rounded-full  shadow-2xl text-white text-sm font-medium ${getRiskLevelColor(region.riskLevel)}`}>
                    {region.riskLevel} Risk
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <FaExclamationTriangle className="text-red-500" />
                    <div>
                      <p className="text-sm text-gray-500">Active Alerts</p>
                      <p className="font-semibold text-white">{region.activeAlerts}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUsers className="text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Population</p>
                      <p className="font-semibold text-white">{region.population}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-50">Recent Disasters</h3>
                  {region.disasters.map((disaster, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">{disaster.type}</p>
                          <p className="text-sm text-gray-500">{disaster.location}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            disaster.severity === 'High' ? 'bg-red-100 text-red-800' :
                            disaster.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {disaster.severity}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">{disaster.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regions;
import React, { useEffect, useState } from "react";
import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaUsers,
  FaTemperatureHigh,
} from "react-icons/fa";
import Loader from "../components/Loader";

const Regions = () => {
  const [regions, setRegions] = useState([]);


  useEffect(() => {
    fetch(`https://environment.data.gov.uk/flood-monitoring/id/floods`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRegions(data.items);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${regions.county}&format=json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
 <>
  {regions.length === 0?<Loader/>: <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Global Regions <span className="text-blue-600"> Overview</span>
        </h1>
        <p className="text-[16px] lg:text-xl text-gray-600">
          Monitor disaster alerts and statistics across different regions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {regions.map((region, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between flex-col items-start mb-4">
                <h2 className="text-xl font-bold text-blue-600">
                  {region.floodArea.county}
                </h2>
                <h1 className="text-white">{region.timeMessageChanged}</h1>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <FaExclamationTriangle className="text-red-500" />
                  <div>
                    <p className="text-sm text-gray-500">Active Alerts</p>
                    <p className="font-semibold text-white">
                      {region.severityLevel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div>
                    <p className=" text-[13px]  lg:text-sm text-gray-500">
                      Wheather Station Code
                    </p>
                    <p className="font-semibold  text-white">
                      {region.floodAreaID}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-50">
                  Recent Disasters
                </h3>
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Change Time</p>

                      <p className="text-xs text-gray-500 mt-1">
                        {region.timeMessageChanged}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`px-2 ${
                          region.severity === "Flood warning"
                            ? "bg-amber-300 text-black"
                            : region.severity === "Warning no longer in force"
                            ? "bg-red-600 text-white"
                            : "bg-blue-600 text-white"
                        } py-2 px-4  rounded-full  text-[9px] lg:text-xs font-medium 
                          
                        }`}
                      >
                        {region.severity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>}
 </> 
  );
};

export default Regions;

import { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      const existingScript = document.getElementById("googleMaps");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.id = "googleMaps";
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.body.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!window.google || !mapRef.current) return;
      const location = { lat: 20.2961, lng: 85.8245 };
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: location,
      });
      new window.google.maps.Marker({
        position: location,
        map: map,
      });
    };

    loadScript();
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">My Google Map</h3>
      <div
        ref={mapRef}
        className="w-full h-[400px] rounded-2xl shadow-md border"
      />
    </div>
  );
};

export default GoogleMap;

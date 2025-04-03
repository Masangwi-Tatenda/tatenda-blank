
import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address?: string;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  height?: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  address = "Tangwena Road, opposite Jongwe Tarven, Chikonohono",
  latitude = -17.369838, // Default latitude for the church location
  longitude = 30.193918, // Default longitude for the church location
  zoom = 15,
  height = "400px",
  className = "",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize the map when the component mounts
    const initMap = () => {
      if (mapRef.current && window.google) {
        const mapOptions = {
          center: { lat: latitude, lng: longitude },
          zoom: zoom,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
          ],
        };
        
        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        
        // Add a marker for the church location
        const marker = new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: "Musha WeBetania Parish",
          animation: window.google.maps.Animation.DROP,
        });
        
        // Add an info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="max-width: 200px; text-align: center;">
              <h3 style="margin: 0; padding: 5px; font-weight: bold;">Musha WeBetania Parish</h3>
              <p style="margin: 5px 0;">${address}</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" target="_blank" style="color: #722F37; text-decoration: underline;">Get Directions</a>
            </div>
          `,
        });
        
        // Open info window when marker is clicked
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
        
        // Initially open the info window
        infoWindow.open(map, marker);
      }
    };

    // Load Google Maps script if it's not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      // Replace process.env with import.meta.env for Vite
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [address, latitude, longitude, zoom]);

  return (
    <div
      ref={mapRef}
      className={`rounded-lg shadow-md overflow-hidden ${className}`}
      style={{ height }}
    />
  );
};

export default GoogleMap;

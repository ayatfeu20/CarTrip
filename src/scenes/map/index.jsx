
import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import L  from "leaflet";
import "leaflet/dist/leaflet.css";


const Map = () => {
 
  
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      const map = L.map(mapContainerRef.current).setView(
        [58.989780914554494, 16.202395167876855],
        15
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "OpenStreetMap",
      }).addTo(map);

      L.marker([58.989780914554494, 16.202395167876855])
        .addTo(map)
        .bindPopup("Address: Löroverksgatan 12, Katrineholm")
        .openPopup();

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <Box m="20px">
      <Header title="Map" subtitle="Report" />
      <p>Address: Löroverksgatan 12, Katrineholm</p>
      <p>Last report: 2023-07-15 12:59</p>

      <div className="map-container" ref={mapContainerRef} style={{ width: "100%", height: "52vh" }} />

    </Box>
  );
};

export default Map;

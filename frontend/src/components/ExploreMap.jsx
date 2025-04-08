import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import FilterControl from './FilterControl';

// Icônes personnalisées
const icons = {
  tornado: new L.Icon({
    iconUrl: '/icons/tornado.png',
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  }),
  earthquake: new L.Icon({
    iconUrl: '/icons/earthquake.png',
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  }),
  volcano: new L.Icon({
    iconUrl: '/icons/volcano.png',
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  })
};

// Coordonnées exemple
const predictions = [
  { lat: 34.02, lng: -6.83, type: 'tornado' },
  { lat: 35.69, lng: 139.69, type: 'earthquake' },
  { lat: 37.77, lng: -122.42, type: 'volcano'}
];

const ExploreMap = () => {
  const [activeFilters, setActiveFilters] = useState({
    tornado: true,
    earthquake: true,
    volcano: true
  });

  const maxBounds = L.latLngBounds(
    L.latLng(-90, -180),
    L.latLng(90, 180)
  );

  const filteredPredictions = predictions.filter(pred => activeFilters[pred.type]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#020C1B]">
      <div className="w-full h-full relative">
       {/* { <FilterControl onFilterChange={setActiveFilters} />} */}
        
        <MapContainer
          center={[10, 0]}
          zoom={2.4}
          className="w-full h-full"
          scrollWheelZoom={true}
          zoomControl={false}
          attributionControl={false}
          minZoom={2.5}
          maxBounds={maxBounds}
          maxBoundsViscosity={1.0}
          worldCopyJump={false}
          style={{ background: '#020C1B' }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            noWrap={true}
            bounds={maxBounds}
          />
          
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            noWrap={true}
            bounds={maxBounds}
          />

          {filteredPredictions.map((pred, i) => (
            <Marker
              key={i}
              position={[pred.lat, pred.lng]}
              icon={icons[pred.type]}
            >
              <Popup>
                <strong>Catastrophe :</strong> {pred.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ExploreMap;

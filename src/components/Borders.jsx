import React, { useEffect, useState } from "react";
import { geoPath, geoOrthographic } from "d3-geo";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const Borders = () => {
  const [geoJson, setGeoJson] = useState(null);
  const { scene } = useThree();

  useEffect(() => {
    fetch("/custom.geo.json")
      .then((response) => response.json())
      .then((data) => setGeoJson(data));
  }, []);

  useEffect(() => {
    if (!geoJson) return;

    const projection = geoOrthographic().fitSize([400, 400], geoJson);
    const pathGenerator = geoPath().projection(projection);

    geoJson.features.forEach((feature) => {
      const mesh = createBorderMesh(feature, pathGenerator);
      scene.add(mesh);
    });
  }, [geoJson, scene]);

  return null; // Ne retourne pas de JSX car on ajoute les objets directement à la scène
};

// 🔹 Fonction pour convertir les coordonnées en XYZ sur la sphère
const latLngToXYZ = (lat, lng, radius = 3.05) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

// 🔹 Fonction pour créer les frontières des pays
const createBorderMesh = (feature, pathGenerator) => {
  const shape = new THREE.Shape();

  feature.geometry.coordinates[0].forEach(([lng, lat], index) => {
    const point = latLngToXYZ(lat, lng);
    if (index === 0) {
      shape.moveTo(point.x, point.y);
    } else {
      shape.lineTo(point.x, point.y);
    }
  });

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.01, bevelEnabled: false });
  const material = new THREE.LineBasicMaterial({ color: "white" });

  return new THREE.LineSegments(new THREE.EdgesGeometry(geometry), material);
};

export default Borders;

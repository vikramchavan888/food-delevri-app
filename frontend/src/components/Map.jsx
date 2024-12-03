import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon } from "leaflet";
import "./Map.css";

const customIcon = new Icon({
  iconUrl:
    "https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732520760/placeholder_rh4ezv.png",
  iconSize: [38, 38], // size of the icon
});
export default function Map() {
  return (
    <MapContainer center={[51.50375, -0.1118]} zoom={14}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" />
      <TileLayer
        attribution="Google Maps"
        //url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={15}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <MarkerClusterGroup>
        <Marker position={[51.50375, -0.1118]} icon={customIcon}>
          <Popup>mcdonald south london </Popup>
        </Marker>
      </MarkerClusterGroup>
    </MapContainer>
  );
}

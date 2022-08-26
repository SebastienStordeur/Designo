import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import PropTypes from "prop-types";

const icon = new L.icon({
  iconUrl: "/location-sign-svgrepo-com.svg",
  iconRetinaUrl: "/location-sign-svgrepo-com.svg",
  iconAnchor: [20, 20],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [20, 20],
});

const Map = (props) => {
  return (
    <MapContainer
      center={props.coordinate}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.coordinate} icon={icon}></Marker>
    </MapContainer>
  );
};

export default Map;

Map.propTypes = {
  coordinate: PropTypes.arrayOf(PropTypes.number),
};

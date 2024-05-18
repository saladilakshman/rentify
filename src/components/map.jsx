import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { rentals } from "../utils/jobs";
import "leaflet/dist/leaflet.css";
// eslint-disable-next-line react/prop-types
export const MapBox = ({ location }) => {
  return (
    <>
      <MapContainer
        center={[29.42655264, -95.67255]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {rentals.map((rental, index) => {
          const position = [
            rental.location.latitude,
            rental.location.longitude,
          ];
          return (
            <Marker position={position} key={index}>
              <FlyToLocation location={location} />
              <Popup>
                <span>{rental.propertyType}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};
// eslint-disable-next-line react/prop-types
function FlyToLocation({ location }) {
  const map = useMap();

  if (location) {
    map.flyTo(location, 16);
  }

  return null;
}

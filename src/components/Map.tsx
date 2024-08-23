import { FC } from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapProps {
  point: {
    coordinates: string;
    title: string;
  };
}

const Map: FC<MapProps> = ({ point }) => {
  const cords = point.coordinates
    .replace(/°/g, '')
    .split(',')
    .map((item) => +item) as LatLngExpression;

  return (
    <div style={{ margin: '0 auto', height: '400px' }}>
      <MapContainer
        center={cords}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cords}>
          <Popup>{point.title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

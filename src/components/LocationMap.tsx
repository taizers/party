import { FC } from 'react';
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { ICords } from '../types';

interface LocationMapProps {
  setCords: (data: ICords) => void;
  cords: string;
}

const LocationMap: FC<LocationMapProps> = ({ setCords, cords }) => {
  const coordinates = cords ? cords?.split(',').map((item) => +item) : null;

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setCords(e.latlng);
        map.flyTo(e.latlng, map.getMaxZoom());
      },
    });

    return coordinates === null ? null : (
      <Marker position={coordinates as LatLngExpression}></Marker>
    );
  }

  return (
    <div style={{ margin: '0 auto' }}>
      <MapContainer
        center={(coordinates as LatLngExpression) || [53.9, 27.55]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '300px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default LocationMap;

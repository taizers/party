import { FC } from 'react';
import { LatLngExpression } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { ICords } from '../types';

interface LocationMapProps {
  setCords: (data: ICords) => void;
  cords: ICords;
}

const LocationMap: FC<LocationMapProps> = ({ setCords, cords }) => {
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setCords(e.latlng);
      },
    });
    // console.log(map);

    return cords === null ? null : (
      <Marker position={cords as LatLngExpression}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div style={{ margin: '0 auto' }}>
      <MapContainer
        center={[53.90,27.55]}
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

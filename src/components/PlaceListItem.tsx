import { FC } from 'react';
import { IFishPlaceListItem } from '../types/responce';

interface PlaceListItemProps {
  place: IFishPlaceListItem;
  onItemClick: (data: number) => void;
  currentListItem: string | number | null;
}

const PlaceListItem: FC<PlaceListItemProps> = ({ place, onItemClick, currentListItem }) => {
  const onClick = () => {
    onItemClick(place.id);
  };

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#eff2ff',
        backgroundColor: currentListItem === place.id ? 'rgba(167, 113, 228, 0.2)' : 'rgba(255, 255, 255, 0.2)',
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <p style={{ fontSize: '18px' }}>
        {place.name} (<span>{place.typePlace.name}</span>)
      </p>
      {place.requirePayment && <span className="pi pi-dollar"></span>}
    </div>
  );
};

export default PlaceListItem;

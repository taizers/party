import { FC } from 'react';
// import { Button } from 'primereact/button';
import { IFishPlaceListItem } from '../types/responce';

interface PlaceListItemProps {
  place: IFishPlaceListItem;
  onItemClick: (data: number) => void;
}

const PlaceListItem: FC<PlaceListItemProps> = ({ place, onItemClick }) => {
  const onClick = () => {
    onItemClick(place.id);
  };
  // const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation();
  //   console.log('click on delete button');
  // };

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
          color: '#eff2ff',
          padding: '10px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ fontSize: '18px' }}>
          {place.name} (<span>{place.typePlace.name}</span>)
        </p>
        {place.requirePayment && <span className="pi pi-dollar"></span>}
      </div>
      {/* <Button // Delete button if need
        style={{ height: '30px', flexShrink: 0 }}
        icon="pi pi-trash"
        onClick={onButtonClick}
        type="button"
      /> */}
    </div>
  );
};

export default PlaceListItem;

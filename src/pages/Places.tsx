import { useState } from 'react';
import PlaceItem from '../components/PlaceItem';
import PlacesList from '../components/PlacesList';

const Places = () => {
  const [currentListItem, setCurrentListItem] = useState<
    number | string | null
  >(null);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
      }}
    >
      <PlacesList currentListItem={currentListItem} setCurrentListItem={setCurrentListItem} />
      <PlaceItem currentListItem={currentListItem} />
    </div>
  );
};

export default Places;

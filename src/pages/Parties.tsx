import { useState } from 'react';
import PartyItem from '../components/PartyItem';
import PartiesList from '../components/PartiesList';

const Parties = () => {
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
      <PartiesList
        currentListItem={currentListItem}
        setCurrentListItem={setCurrentListItem}
      />
      <PartyItem currentListItem={currentListItem} />
    </div>
  );
};

export default Parties;

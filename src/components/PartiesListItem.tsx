import { FC } from 'react';
import { IPartyListItem } from '../types/responce';
import moment from 'moment';

interface PartiesListItemProps {
  party: IPartyListItem;
  onItemClick: (data: number) => void;
  currentListItem: string | number | null;
}

const PartiesListItem: FC<PartiesListItemProps> = ({
  party,
  onItemClick,
  currentListItem,
}) => {
  const onClick = () => {
    onItemClick(party.id);
  };
  const date = moment(party.dateOfEvent).format('YYYY-MM-DD');
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#eff2ff',
        backgroundColor:
          currentListItem === party.id
            ? 'rgba(167, 113, 228, 0.2)'
            : 'rgba(255, 255, 255, 0.2)',
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <p style={{ fontSize: '18px' }}>
          {party.name} (<span>{party.type}</span>)
        </p>
        <span>{date}</span>
      </div>
      {party.ageRestriction && (
        <span
          style={{
            backgroundColor: party.ageRestriction >= 18 ? '#c42a2a' : '#ff7300',
            color: '#fff1f1',
            padding: '5px',
            borderRadius: '5px',
          }}
        >
          {party.ageRestriction}+
        </span>
      )}
    </div>
  );
};

export default PartiesListItem;

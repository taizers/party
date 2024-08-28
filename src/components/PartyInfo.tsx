import { FC } from 'react';
import { IParty } from '../types/responce';
import Map from './Map';
import moment from 'moment';

interface PartyInfoProps {
  party: IParty;
}

const PartyInfo: FC<PartyInfoProps> = ({ party }) => {
  const point = {
    coordinates: party?.coordinates,
    title: `${party?.name} (${party?.type})`,
  };

  const date = moment(party.dateOfEvent).format('YYYY-MM-DD');

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        }}
      >
        {party.ageRestriction && (
          <div
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
              backgroundColor:
                party.ageRestriction >= 18 ? '#c42a2a' : '#ff7300',
              color: '#fff1f1',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            {party.ageRestriction}+
          </div>
        )}

        <h3 style={{ alignSelf: 'center', fontSize: '22px' }}>
          {party.name} (<span>{party.type}</span>)
        </h3>
        <h4 style={{ alignSelf: 'center', fontSize: '18px' }}>
          {'Organizer: '}
          {party.organizerUsername}
        </h4>
        <p style={{ textIndent: '20px' }}>{party.description}</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        }}
      >
        <h4 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
          {'Info'}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            {'Cost'}: {party.ticketCost}
          </div>
          <div>
            {'Minimal Rating'}: {party.minimalRating}
          </div>
          <div>
            {'Count Of Places'}: {party.countOfPlaces}
          </div>
          <div>
            {'Minimal Age'}: {party.ageRestriction}
          </div>
          <div>
            {'Date Of Event'}: {date}
          </div>
        </div>
      </div>
      <div>
        <Map point={point} />
      </div>
    </>
  );
};

export default PartyInfo;

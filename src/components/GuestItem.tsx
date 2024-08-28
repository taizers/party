import { Fieldset } from 'primereact/fieldset';
import { FC } from 'react';
import { IGuest } from '../types/responce';

interface GuestItemProps {
  guest: IGuest;
}

const GuestItem: FC<GuestItemProps> = ({ guest }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Fieldset style={{ backgroundColor: '#a2a0fd', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p className="m-0">
            {guest.username}(
            <span className="font-bold">
              {'Age:'}
              {guest.age}
            </span>
            )
          </p>
        </div>
      </Fieldset>
    </div>
  );
};

export default GuestItem;

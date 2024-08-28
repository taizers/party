import { Fieldset } from 'primereact/fieldset';
import { FC } from 'react';
import { IGuestRequest } from '../types/responce';
import { Button } from 'primereact/button';

interface GuestRequestItemProps {
  request: IGuestRequest;
  updateStatus: (data: { id: number; data: boolean }) => void;
}

const GuestRequestItem: FC<GuestRequestItemProps> = ({
  request,
  updateStatus,
}) => {
  return (
    <div style={{ padding: '20px' }}>
      <Fieldset style={{ backgroundColor: '#a2a0fd', color: 'white' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <p className="m-0">
            {request.username}(
            <span className="font-bold">
              {'Age:'}
              {request.age}
            </span>
            )
          </p>
          <div style={{ display: 'flex' }}>
            <Button
              label="Accept"
              onClick={() => updateStatus({ id: request.id, data: true })}
              style={{ width: '100%' }}
              text
              className="submitButton w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            ></Button>
            <Button
              label="Reject"
              onClick={() => updateStatus({ id: request.id, data: false })}
              style={{ width: '100%' }}
              text
              className="submitButton w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            ></Button>
          </div>
        </div>
      </Fieldset>
    </div>
  );
};

export default GuestRequestItem;

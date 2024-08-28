import { Button } from 'primereact/button';
import { Rating, RatingChangeEvent } from 'primereact/rating';
import DeleteModal from '../modals/DeleteModal';
import { useState } from 'react';
import { waitStatuses } from '../constants.ts';

export const StatusTemplate = <T extends { status: string }>(product: T) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <span>{product.status}</span>
    </div>
  );
};

export const AdminStatusesTemplate = <T extends { status: string; id: number }>(
  product: T,
  updateStatus: (data: object) => void
) => {
  if (waitStatuses.includes(product.status)) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span style={{ marginBottom: '5px' }}>{product.status}</span>
        <div style={{ display: 'flex' }}>
          <Button
            label="Accept"
            onClick={() => updateStatus({ id: product.id, data: true })}
            style={{ width: '100%' }}
            text
            className="p-button font-bold"
          ></Button>
          <Button
            label="Reject"
            onClick={() => updateStatus({ id: product.id, data: false })}
            style={{ width: '100%' }}
            text
            className="p-button font-bold"
          ></Button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <span>{product.status}</span>
    </div>
  );
};

export const PartyStatusTemplate = <T extends { status: string; id: number }>(
  product: T
) => {
  if (product.status === 'ACCEPTED') {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <span
          className="pi pi-check-circle"
          style={{ fontSize: '1.5rem', color: 'green' }}
        ></span>
      </div>
    );
  }
  if (product.status === 'IN_PROCESS') {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <span
          className="pi pi-spin pi-spinner"
          style={{ fontSize: '1.5rem' }}
        ></span>
      </div>
    );
  }
  if (product.status === 'REJECTED') {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <span
          className="pi pi-times-circle"
          style={{ fontSize: '1.5rem', color: 'red' }}
        ></span>
      </div>
    );
  }
};

export const OpenTemplate = <T extends { id: number }>(
  product: T,
  onOpen: (id: number) => void
) => {
  return <Button label="Open" link onClick={() => onOpen(product.id)} />;
};

export const DeleteTemplate = <T extends { id: number }>(
  product: T,
  onDelete: (id: number) => void
) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <DeleteModal
        deleteFunction={() => onDelete(product.id)}
        deleteIcon="pi-trash"
      />
    </div>
  );
};

export const LeaveTemplate = <T extends { id: number; status: string }>(
  product: T,
  onLeave: (id: number) => void
) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {product.status === 'ACCEPTED' && (
        <DeleteModal
          deleteFunction={() => onLeave(product.id)}
          deleteIcon="pi-sign-out"
          text={'Do you want to leave?'}
        />
      )}
    </div>
  );
};

export const SetGradeTemplate = <
  T extends { id: number; status: string; dateOfEvent: string },
>(
  product: T,
  setNewGrade: (id: number, grade: number) => void
) => {
  const [grade, setGrade] = useState<number>();

  const date = new Date();
  const partyDate = new Date(product.dateOfEvent);

  const onSetGrade = (e: RatingChangeEvent) => {
    setGrade(e.value as number);
    setNewGrade(product.id, e.value as number);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {product.status === 'ACCEPTED' && date < partyDate && (
        <Rating value={grade} onChange={onSetGrade} cancel={false} />
      )}
    </div>
  );
};

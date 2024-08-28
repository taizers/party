import React from 'react';

interface GuestsListProps<T> {
  items: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  title: string;
}

export default function GuestsList<T>(props: GuestsListProps<T>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
      }}
    >
      <h4 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
        {props.title}
      </h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {props.items?.map(props.renderItem)}
      </div>
    </div>
  );
}

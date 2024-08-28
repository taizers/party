import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IGuest, IParty, useGetQueryResponce } from '../types/responce';
import { useShowErrorToast } from '../hooks';
import PartyInfo from '../components/PartyInfo';
// import { partyMock } from '../mocks';
import { adminApiSlice } from '../store/reducers/AdminApiSlice';
import GuestsList from '../components/GuestsList';
import GuestItem from '../components/GuestItem';
import NoData from '../components/NoData';
import Loader from '../components/Loader';

const AdminParty: FC = () => {
  const { id } = useParams();

  const { data, error, isLoading } =
    adminApiSlice.useGetAdminPartyQuery<useGetQueryResponce<IParty>>(id);

  useShowErrorToast(error);

  return (
    <>
      {data && (
        <div
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <PartyInfo party={data} />
          {data.guests?.length && (
            <GuestsList<IGuest>
              title={'Guests'}
              items={data.guests}
              renderItem={(guest, index) => (
                <GuestItem key={index} guest={guest} />
              )}
            />
          )}
        </div>
      )}
      {!data && !isLoading && <NoData />}
      {isLoading && <Loader />}
    </>
  );
};

export default AdminParty;

import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IParty, useGetQueryResponce } from '../types/responce';
import { useShowErrorToast } from '../hooks';
import PartyInfo from '../components/PartyInfo';
// import { partyMock } from '../mocks';
import { userApiSlice } from '../store/reducers/UserApiSlice';
import NoData from '../components/NoData';
import Loader from '../components/Loader';

const UsersParty: FC = () => {
  const { id } = useParams();

  const { data, error, isLoading } =
    userApiSlice.useGetUsersPartyQuery<useGetQueryResponce<IParty>>(id);

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
        </div>
      )}
      {!data && !isLoading && <NoData />}
      {isLoading && <Loader />}
    </>
  );
};

export default UsersParty;

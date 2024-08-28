import { FC, useEffect } from 'react';
import { useGetQueryResponce, IParty } from '../types/responce';
import { partiesApiSlice } from '../store/reducers/PartiesApiSlice';
import { useAppSelector, useShowErrorToast } from '../hooks';
import PartyInfo from './PartyInfo';
import NoData from './NoData';
// import { partyMock } from '../mocks';
import { Button } from 'primereact/button';
import { userApiSlice } from '../store/reducers/UserApiSlice';
import { createToast } from '../utils/toasts';
import { userRole } from '../constants';
import Loader from './Loader';

interface PartyItemProps {
  currentListItem: number | string | null;
}

const PartyItem: FC<PartyItemProps> = ({ currentListItem }) => {
  const { data, error, isLoading } =
    partiesApiSlice.useGetPartyQuery<useGetQueryResponce<IParty>>(
      currentListItem
    );
  const [sendRequest, { data: requestData, error: requestError }] =
    userApiSlice.useSendRequestMutation();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (requestData) {
      createToast.success('Request Sended');
    }
  }, [requestData]);

  useShowErrorToast(error);
  useShowErrorToast(requestError);

  return (
    <div
      style={{
        backgroundColor: '#9393f7',
        flexBasis: 700,
        flexGrow: 1,
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2) inset',
      }}
    >
      {data && (
        <div
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {user?.name &&
            user.role === userRole &&
            !data.statusOfParticipationRequest && (
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  label="Send Request"
                  onClick={() => sendRequest(currentListItem)}
                  className="p-button font-bold"
                ></Button>
              </div>
            )}
          <PartyInfo party={data} />
        </div>
      )}
      {!data && !isLoading && currentListItem !== null && (
        <NoData color="white" />
      )}
      {currentListItem === null && !data && !isLoading && (
        <NoData color="white" label={'Select Some Party'} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default PartyItem;

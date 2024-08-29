import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IGuest,
  IGuestRequest,
  IParty,
  IResponcePaginatedData,
  useGetQueryResponce,
} from '../types/responce';
import { useShowErrorToast } from '../hooks';
import PartyInfo from '../components/PartyInfo';
// import { partyMock, guestsRequestsMock } from '../mocks';
import { Button } from 'primereact/button';
import { organizatorApiSlice } from '../store/reducers/OrganizatorApiSlice';
import PartyModal from '../modals/PartyModal';
import { createToast } from '../utils/toasts';
import NoData from '../components/NoData';
import GuestsList from '../components/GuestsList';
import GuestItem from '../components/GuestItem';
import GuestRequestItem from '../components/GuestRequestItem';
import Loader from '../components/Loader';
import { defaultPaginationPage, defaultPaginationLimit } from '../constants';

const OrganizatorsParty: FC = () => {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(defaultPaginationPage);
  const [limit, setLimit] = useState<number>(defaultPaginationLimit);
  const [guestsPage, setGuestsPage] = useState<number>(defaultPaginationPage);
  const [guestsLimit, setGuestsLimit] = useState<number>(defaultPaginationLimit);

  const { data, error, isLoading } =
    organizatorApiSlice.useGetOrganiatorsPartyQuery<
      useGetQueryResponce<IParty>
    >(id);
  const { data: guestsRequests, error: guestsRequestsError } =
    organizatorApiSlice.useGetGuestsRequestsQuery<
      useGetQueryResponce<IResponcePaginatedData<IGuestRequest>>
    >({id, page, limit});
  const { data: guests, error: guestsError } =
    organizatorApiSlice.useGetPartyGuestsQuery<
      useGetQueryResponce<IResponcePaginatedData<IGuest>>
    >({id, page, limit});

  const [
    sendParticipation,
    { data: participationData, error: participationError },
  ] = organizatorApiSlice.useParticipationResponseMutation();

  useShowErrorToast(error);
  useShowErrorToast(guestsRequestsError);
  useShowErrorToast(participationError);
  useShowErrorToast(guestsError);

  useEffect(() => {
    if (participationData) {
      createToast.success('Updated');
    }
  }, [participationData]);

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
          <div
            style={{
              margin: '10px 0',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              label="Update Party"
              onClick={() => setModalOpen(true)}
              className="p-button font-bold"
            ></Button>
            {isModalOpen && (
              <PartyModal party={data} setVisible={setModalOpen} />
            )}
          </div>
          <PartyInfo party={data} />
          {guests?.content.length && (
            <GuestsList<IGuest>
              title={'Guests'}
              items={guests.content}
              pagination={{
                page: { current: guestsPage, setPage: setGuestsPage },
                limit: { current: guestsLimit, setLimit: setGuestsLimit },
                totalElements: guests.totalElements,
              }}
              renderItem={(guest, index) => (
                <GuestItem key={index} guest={guest} />
              )}
            />
          )}
          {guestsRequests?.content?.length && (
            <GuestsList<IGuestRequest>
              title={'Guests Requests'}
              items={guestsRequests.content}
              pagination={{
                page: { current: page, setPage },
                limit: { current: limit, setLimit },
                totalElements: guestsRequests.totalElements,
              }}
              renderItem={(request, index) => (
                <GuestRequestItem
                  updateStatus={sendParticipation}
                  key={index}
                  request={request}
                />
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

export default OrganizatorsParty;

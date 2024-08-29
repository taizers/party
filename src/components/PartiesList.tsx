import { FC, useState } from 'react';
import PartyListItem from './PartiesListItem';
import PaginationComponent from './Pagination';
import { partiesApiSlice } from '../store/reducers/PartiesApiSlice';
import { useAppSelector, useShowErrorToast } from '../hooks';
import {
  IPartyListItem,
  IResponcePaginatedData,
  useGetQueryResponce,
} from '../types/responce';
// import { listOfPartiesMock } from '../mocks';
import NoData from './NoData';
import Loader from './Loader';
import { defaultPaginationLimit, defaultPaginationPage } from '../constants';

interface PartiesListProps {
  setCurrentListItem: (id: string | number) => void;
  currentListItem: string | number | null;
}

const PartiesList: FC<PartiesListProps> = ({
  setCurrentListItem,
  currentListItem,
}) => {
  const [page, setPage] = useState<number>(defaultPaginationPage);
  const [limit, setLimit] = useState<number>(defaultPaginationLimit);

  const { location } = useAppSelector((state) => state.auth);

  const { data, error, isLoading } = partiesApiSlice.useGetPartiesListQuery<
    useGetQueryResponce<IResponcePaginatedData<IPartyListItem>>
  >({
    page,
    limit,
    city: location,
  });

  useShowErrorToast(error);

  return (
    <div
      style={{
        backgroundColor: '#8c8cf8',
        flexBasis: 300,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        gap: '15px',
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2) inset',
      }}
    >
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        {data?.content?.map((item, index) => (
          <PartyListItem
            currentListItem={currentListItem}
            onItemClick={setCurrentListItem}
            party={item}
            key={index}
          />
        ))}
        {!data && !isLoading && <NoData color="white" />}
        {isLoading && <Loader />}
      </div>
      <PaginationComponent
        page={{ current: page, setPage }}
        limit={{ current: limit, setLimit }}
        itemsCount={data?.totalElements || 1}
      />
    </div>
  );
};

export default PartiesList;

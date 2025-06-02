import { FC, useEffect, useState } from 'react';
import PartyListItem from './PartiesListItem';
import PaginationComponent from './Pagination';
import { partiesApiSlice } from '../store/reducers/PartiesApiSlice';
import { useAppSelector, useShowErrorToast } from '../hooks';
import {
  IPartyListItem,
  IResponcePaginatedData,
  useGetQueryResponce,
} from '../types/responce';
import NoData from './NoData';
import Loader from './Loader';
import { defaultPaginationLimit, defaultPaginationPage } from '../constants';
import SearchBar from './SearchBar.tsx';

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
  const [total, setTotal] = useState<number>(0);
  const [currentParties, setCurrentParties] = useState<IPartyListItem[]>([]);
  const [search, setSearch] = useState<string>('');

  const { location } = useAppSelector((state) => state.auth);

  const { data, error, isLoading } = partiesApiSlice.useGetPartiesListQuery<
    useGetQueryResponce<IResponcePaginatedData<IPartyListItem>>
  >({
    page,
    limit,
    city: location,
  });

  useEffect(() => {
    if (search === '') {
      setCurrentParties(data?.content || []);
      setTotal(data?.totalElements || 0);
      return;
    }

    const newData = data?.content?.filter(item =>
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setCurrentParties(newData);
    setTotal(newData?.length);
  }, [search, data]);

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
      {!!currentParties.length &&
        <div
          style={{
            alignSelf: 'center',
          }}
        >
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      }
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        {currentParties?.map((item, index) => (
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
      {!!total && (
        <PaginationComponent
          page={{ current: page, setPage }}
          limit={{ current: limit, setLimit }}
          itemsCount={total}
        />
      )}
    </div>
  );
};

export default PartiesList;

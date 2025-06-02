import { FC, useEffect, useState } from 'react';
import {
  IOrganizatorsParty,
  IResponcePaginatedData,
  useGetQueryResponce,
} from '../types/responce';
import { useShowErrorToast } from '../hooks';
import PaginationComponent from '../components/Pagination';
import NoData from '../components/NoData';
import { createToast } from '../utils/toasts';
import { useNavigate } from 'react-router-dom';
import {
  DeleteTemplate,
  OpenTemplate,
  StatusTemplate,
} from '../components/DataTableTemplates';
import AdminTable from '../components/DataTable';
import moment from 'moment';
import { organizatorApiSlice } from '../store/reducers/OrganizatorApiSlice';
import PartyModal from '../modals/PartyModal';
import { Button } from 'primereact/button';
import { IDataTableItemTemplate } from '../types';
import Loader from '../components/Loader';
import { defaultPaginationLimit, defaultPaginationPage } from '../constants';
import SearchBar from '../components/SearchBar.tsx';

const OrganizatorsParties: FC = () => {
  const [page, setPage] = useState<number>(defaultPaginationPage);
  const [limit, setLimit] = useState<number>(defaultPaginationLimit);
  const [total, setTotal] = useState<number>(0);
  const [currentParties, setCurrentParties] = useState<IOrganizatorsParty[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { data, error, isLoading } =
    organizatorApiSlice.useGetOrganizatorsPartiesListQuery<
      useGetQueryResponce<IResponcePaginatedData<IOrganizatorsParty>>
    >({
      page,
      limit,
    });
  const [deleteParty, { data: deleteData, error: deleteError }] =
    organizatorApiSlice.useDeletePartyMutation();

  const history = useNavigate();

  useShowErrorToast(error);
  useShowErrorToast(deleteError);

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

  useEffect(() => {
    if (deleteData) {
      createToast.success('Deleted');
    }
  }, [deleteData]);

  const onDelete = (id: number) => {
    deleteParty(id);
  };

  const onOpen = (id: number) => {
    history(`/organizator/parties/${id}`);
  };

  const columns = [
    {
      field: 'id',
      header: 'ID',
    },
    {
      field: 'name',
      header: 'Name',
    },
    {
      field: 'type',
      header: 'Type',
    },
    {
      field: 'countOfPlaces',
      header: 'Count Of Places',
    },
    {
      field: 'ticketCost',
      header: 'ticket Cost',
      template: (product: IOrganizatorsParty) => `${product.ticketCost}$`,
    },
    {
      field: 'ageRestriction',
      header: 'Age Restriction',
      template: (product: IOrganizatorsParty) => `${product.ageRestriction}+`,
    },
    {
      field: 'dateOfEvent',
      header: 'Date Of Event',
      template: (product: IOrganizatorsParty) =>
        moment(product.dateOfEvent).format('YYYY-MM-DD'),
    },
    {
      header: 'Status',
      template: StatusTemplate<IOrganizatorsParty>,
    },
    {
      header: 'Open',
      template: (product: IOrganizatorsParty) =>
        OpenTemplate<IOrganizatorsParty>(product, onOpen),
    },
    {
      header: 'Delete',
      template: (product: IOrganizatorsParty) =>
        DeleteTemplate<IOrganizatorsParty>(product, onDelete),
    },
  ];

  return (
    <div style={{ padding: '10px' }}>
      {
        <div
          style={{
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            label="Create Party"
            onClick={() => setModalOpen(true)}
            className="p-button font-bold"
          ></Button>
          {isModalOpen && <PartyModal setVisible={setModalOpen} />}
        </div>
      }
      {!!currentParties.length && (
        <div
          style={{
            alignSelf: 'center',
          }}
        >
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      )}
      {data && (
        <AdminTable<IOrganizatorsParty>
          columns={columns as IDataTableItemTemplate<IOrganizatorsParty>[]}
          values={currentParties}
          title={'Organizator'}
        />
      )}
      {!data && !isLoading && <NoData />}
      {isLoading && <Loader />}
      {!!total &&
        <PaginationComponent
          page={{ current: page, setPage }}
          limit={{ current: limit, setLimit }}
          itemsCount={total}
        />
      }
    </div>
  );
};

export default OrganizatorsParties;

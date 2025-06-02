import { FC, useEffect, useState } from 'react';
import {
  IAdminsParty,
  IResponcePaginatedData,
  useGetQueryResponce,
} from '../types/responce';
import { useShowErrorToast } from '../hooks';
import PaginationComponent from '../components/Pagination';
import NoData from '../components/NoData';
import { createToast } from '../utils/toasts';
import { useNavigate } from 'react-router-dom';
import {
  AdminStatusesTemplate,
  DeleteTemplate,
  OpenTemplate,
} from '../components/DataTableTemplates';
import AdminTable from '../components/DataTable';
import moment from 'moment';
import { adminApiSlice } from '../store/reducers/AdminApiSlice';
import { IDataTableItemTemplate } from '../types';
import Loader from '../components/Loader';
import { defaultPaginationLimit, defaultPaginationPage } from '../constants';
import SearchBar from '../components/SearchBar.tsx';

const AdminsParties: FC = () => {
  const [page, setPage] = useState<number>(defaultPaginationPage);
  const [limit, setLimit] = useState<number>(defaultPaginationLimit);
  const [total, setTotal] = useState<number>(0);
  const [currentParties, setCurrentParties] = useState<IAdminsParty[]>([]);
  const [search, setSearch] = useState<string>('');

  const { data, error, isLoading } = adminApiSlice.useGetAdminPartiesListQuery<
    useGetQueryResponce<IResponcePaginatedData<IAdminsParty>>
  >({
    page,
    limit,
  });
  const [deleteParty, { data: deleteData, error: deleteError }] =
    adminApiSlice.useDeletePartyForAdminMutation();
  const [updateStatus, { data: updatedData, error: updatedError }] =
    adminApiSlice.useUpdatePartyStatusMutation();

  useShowErrorToast(error);
  useShowErrorToast(deleteError);
  useShowErrorToast(updatedError);

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
  useEffect(() => {
    if (updatedData) {
      createToast.success('Status Updated');
    }
  }, [updatedData]);

  const history = useNavigate();

  const onOpen = (id: number) => {
    history(`/admin/parties/${id}`);
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
      field: 'countOfPlaces',
      header: 'Count Of Places',
    },
    {
      field: 'organizerUsername',
      header: 'Organizer Username',
    },
    {
      field: 'ticketCost',
      header: 'ticket Cost',
      template: (product: IAdminsParty) => `${product.ticketCost}$`,
    },
    {
      field: 'ageRestriction',
      header: 'Age Restriction',
      template: (product: IAdminsParty) => `${product.ageRestriction}+`,
    },
    {
      field: 'dateOfEvent',
      header: 'Date Of Event',
      template: (product: IAdminsParty) =>
        moment(product.dateOfEvent).format('YYYY-MM-DD'),
    },
    {
      header: 'Status',
      template: (product: IAdminsParty) =>
        AdminStatusesTemplate<IAdminsParty>(product, updateStatus),
    },
    {
      header: 'Open',
      template: (product: IAdminsParty) =>
        OpenTemplate<IAdminsParty>(product, onOpen),
    },
    {
      header: 'Delete',
      template: (product: IAdminsParty) =>
        DeleteTemplate<IAdminsParty>(product, deleteParty),
    },
  ];

  return (
    <div style={{ padding: '10px' }}>
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
        <AdminTable<IAdminsParty>
          columns={columns as IDataTableItemTemplate<IAdminsParty>[]}
          values={currentParties}
          title={'Administrator'}
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

export default AdminsParties;

import { FC, useEffect, useState } from 'react';
// import { organizatorslistOfPartiesMock } from '../mocks';
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

const OrganizatorsParties: FC = () => {
  const [page, setPage] = useState<number>(defaultPaginationPage);
  const [limit, setLimit] = useState<number>(defaultPaginationLimit);
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
      {data && (
        <AdminTable<IOrganizatorsParty>
          columns={columns as IDataTableItemTemplate<IOrganizatorsParty>[]}
          values={data.content}
          title={'Organizator'}
        />
      )}
      {!data && !isLoading && <NoData />}
      {isLoading && <Loader />}
      <PaginationComponent
        page={{ current: page, setPage }}
        limit={{ current: limit, setLimit }}
        itemsCount={data?.totalElements || 1}
      />
    </div>
  );
};

export default OrganizatorsParties;

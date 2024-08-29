import { FC, useEffect, useState } from 'react';
// import { userslistOfPartiesMock } from '../mocks';
import { partiesApiSlice } from '../store/reducers/PartiesApiSlice';
import {
  IResponcePaginatedData,
  IUsersParty,
  useGetQueryResponce,
} from '../types/responce';
import { useShowErrorToast } from '../hooks';
import PaginationComponent from '../components/Pagination';
import NoData from '../components/NoData';
import { createToast } from '../utils/toasts';
import { useNavigate } from 'react-router-dom';
import {
  LeaveTemplate,
  OpenTemplate,
  PartyStatusTemplate,
  SetGradeTemplate,
} from '../components/DataTableTemplates';
import AdminTable from '../components/DataTable';
import moment from 'moment';
import { userApiSlice } from '../store/reducers/UserApiSlice';
import { IDataTableItemTemplate } from '../types';
import Loader from '../components/Loader';

const UserParties: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const { data, error, isLoading } = partiesApiSlice.useGetPartiesListQuery<
    useGetQueryResponce<IResponcePaginatedData<IUsersParty>>
  >({
    page,
    limit,
  });
  const [leave, { data: leaveData, error: leaveError }] =
    userApiSlice.useLeaveFromPartyMutation();
  const [setGrade, { data: gradeData, error: gradeError }] =
    userApiSlice.useSetPartyGradeMutation();

  useShowErrorToast(error);
  useShowErrorToast(gradeError);
  useShowErrorToast(leaveError);

  useEffect(() => {
    if (leaveData) {
      createToast.success('Leaved');
    }
  }, [leaveData]);
  useEffect(() => {
    if (gradeData) {
      createToast.success('Graded');
    }
  }, [gradeData]);

  const history = useNavigate();

  const onOpen = (id: number) => {
    history(`/user/parties/${id}`);
  };
  const setGradeOpen = (id: number, rate: number) => {
    setGrade({ id, rate });
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
      field: 'organizerUsername',
      header: 'Organizer Username',
    },
    {
      field: 'ticketCost',
      header: 'ticket Cost',
      template: (product: IUsersParty) => `${product.ticketCost}$`,
    },
    {
      field: 'ageRestriction',
      header: 'Age Restriction',
      template: (product: IUsersParty) => `${product.ageRestriction}+`,
    },
    {
      field: 'dateOfEvent',
      header: 'Date Of Event',
      template: (product: IUsersParty) =>
        moment(product.dateOfEvent).format('YYYY-MM-DD'),
    },
    {
      header: 'Status',
      template: PartyStatusTemplate<IUsersParty>,
    },
    {
      header: 'Open',
      template: (product: IUsersParty) =>
        OpenTemplate<IUsersParty>(product, onOpen),
    },
    {
      header: 'Grade',
      template: (product: IUsersParty) =>
        SetGradeTemplate<IUsersParty>(product, setGradeOpen),
    },
    {
      header: 'Leave',
      template: (product: IUsersParty) =>
        LeaveTemplate<IUsersParty>(product, leave),
    },
  ];

  return (
    <div style={{ padding: '10px' }}>
      {data && (
        <AdminTable<IUsersParty>
          columns={columns as IDataTableItemTemplate<IUsersParty>[]}
          values={data.content}
          title={'User'}
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

export default UserParties;

import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTable from './AdminTable';
import PaginationComponent from './Pagination';
import { fishPlacesApiSlice } from '../store/reducers/FishPlacesApiSlice';
import {
  IAdminPalce,
  IResponcePaginatedData,
  useGetQueryResponce,
} from '../types/responce';
import { useShowErrorToast } from '../hooks';
import {
  deleteTemplate,
  isApprovedTemplate,
  openTemplate,
  userTemplate,
} from './AdminTableTemplates';
import { createToast } from '../utils/toasts';
import NoData from './NoData';

const PlacesAdmin: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const history = useNavigate();

  const [deletePlace, { data: deleteData, error: deleteError }] =
    fishPlacesApiSlice.useDeletePlaceMutation();
  const [updateStatus, { error }] =
    fishPlacesApiSlice.useUpdatePlaceStatusMutation();
  const {
    data,
    error: getListError,
    isLoading,
  } = fishPlacesApiSlice.useGetAdminPlacesListQuery<
    useGetQueryResponce<IResponcePaginatedData<IAdminPalce>>
  >({
    page,
    limit,
  });

  useEffect(() => {
    if (deleteData) {
      createToast.success('Deleted');
    }
  }, [deleteData]);

  useShowErrorToast(error);
  useShowErrorToast(getListError);
  useShowErrorToast(deleteError);

  const onDelete = (id: number) => {
    deletePlace(id);
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
      field: 'typePlace',
      header: 'Type of Place',
    },
    {
      field: 'user',
      header: 'User',
      template: (product: IAdminPalce) => userTemplate<IAdminPalce>(product),
    },
    {
      header: 'Approved',
      template: (product: IAdminPalce) =>
        isApprovedTemplate<IAdminPalce>(product, updateStatus),
    },
    {
      header: 'Open',
      template: (product: IAdminPalce) =>
        openTemplate<IAdminPalce>(product, history),
    },
    {
      header: 'Delete',
      template: (product: IAdminPalce) =>
        deleteTemplate<IAdminPalce>(product, onDelete),
    },
  ];

  return (
    <div>
      {data && (
        <AdminTable<IAdminPalce>
          columns={columns}
          values={data.items}
          title={'Places'}
        />
      )}
      {!data && !isLoading && <NoData />}
      <PaginationComponent
        page={{ current: page, setPage }}
        limit={{ current: limit, setLimit }}
        itemsCount={data?.itemCounts || 1}
      />
    </div>
  );
};

export default PlacesAdmin;

import { FC } from 'react';
import NewsInfo from '../components/NewsInfo';
import { useParams } from 'react-router-dom';
import { newsApiSlice } from '../store/reducers/NewsApiSlice';
import { INews, useGetQueryResponce } from '../types/responce';
import { useShowErrorToast } from '../hooks';
// import { newsItemMock } from '../mocks';

const NewsAdminItem: FC = () => {
  const { id } = useParams();
  const { data, error } =
    newsApiSlice.useGetAdminNewsQuery<useGetQueryResponce<INews>>(id);

  useShowErrorToast(error);

  return <NewsInfo newsItem={data} />;
};

export default NewsAdminItem;

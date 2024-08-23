import { FC } from 'react';
import NewsInfo from '../components/NewsInfo';
import { useParams } from 'react-router-dom';
import { newsApiSlice } from '../store/reducers/NewsApiSlice';
import { INews, useGetQueryResponce } from '../types/responce';
import { useShowErrorToast } from '../hooks';

const NewsItem: FC = () => {
  const { id } = useParams();

  const { data, error } =
    newsApiSlice.useGetNewsQuery<useGetQueryResponce<INews>>(id);

  useShowErrorToast(error);

  return <NewsInfo newsItem={data} />;
};

export default NewsItem;

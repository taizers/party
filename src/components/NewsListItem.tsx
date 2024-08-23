import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { INewsItem } from '../types/responce';

interface NewsListItemProps {
  newsItem: INewsItem;
}

const NewsListItem: FC<NewsListItemProps> = ({ newsItem }) => {
  const history = useNavigate();

  const onCardClick = () => {
    history(`/news/${newsItem.id}`);
  };

  return (
    <div
      className="newslist-item"
      style={{
        display: 'flex',
        flexGrow: 1,
        flexBasis: 450,
        padding: '10px',
        boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2) ',
      }}
    >
      <div
        className="newslist-item-photo"
        style={{ maxWidth: '200px', borderRadius: '10px' }}
        onClick={onCardClick}
      >
        <img
          style={{ objectFit: 'contain' }}
          width={'100%'}
          src={newsItem.photos[0].photoPath}
          alt="News item photo photo"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          minWidth: '250px',
          position: 'relative',
        }}
      >
        {newsItem.isAlarm && (
          <span
            style={{ position: 'absolute', top: 0, right: 0, color: '#cf3030' }}
            className="pi pi-bell"
          ></span>
        )}
        <h4 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
          {newsItem.title}
        </h4>
        <p style={{ textIndent: '20px' }}>{newsItem.annotation}</p>
      </div>
    </div>
  );
};

export default NewsListItem;

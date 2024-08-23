import { FC } from 'react';
import { INews } from '../types/responce';
import CarouselComponent from './CarouselComponent';
import CarouselTemplate from './CarouselTemplate';

interface NewsInfoProps {
  newsItem: INews;
}

const NewsInfo: FC<NewsInfoProps> = ({ newsItem }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '10px',
      }}
    >
      {newsItem && (
        <>
          <div
            style={{ padding: '10px', maxWidth: '600px', alignSelf: 'center' }}
          >
            <img
              style={{ objectFit: 'contain' }}
              width={'100%'}
              src={newsItem.photos[0].photoPath}
              alt="News item photo photo"
            />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <h2 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
              {newsItem.title}
            </h2>
            <p
              style={{
                textIndent: '20px',
                fontWeight: 500,
                fontSize: '18px',
                margin: 0,
              }}
            >
              {newsItem.annotation}
            </p>
            <p style={{ textIndent: '20px', margin: 0 }}>{newsItem.text}</p>
            {newsItem.photos.length > 0 && (
              <CarouselComponent
                values={newsItem.photos}
                template={CarouselTemplate}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsInfo;

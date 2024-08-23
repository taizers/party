import { FC } from 'react';

interface CarouselTemplateProps {
  photoPath: string;
}

const CarouselTemplate: FC<CarouselTemplateProps> = ({ photoPath }) => {
  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '0 auto',
        height: '200px',
        padding: '10px',
      }}
    >
      <img
        style={{ objectFit: 'contain' }}
        width={'100%'}
        height={'100%'}
        src={photoPath}
        alt="carousel photo"
      />
    </div>
  );
};

export default CarouselTemplate;

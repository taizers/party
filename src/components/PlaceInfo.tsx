import { FC } from 'react';
import { IPlace } from '../types/responce';
import CarouselComponent from './CarouselComponent';
import CarouselTemplate from './CarouselTemplate';
import { ProgressBar } from 'primereact/progressbar';
import Map from './Map';
import Comments from './Comments';

interface PlaceInfoProps {
  placeData: IPlace;
}

const PlaceInfo: FC<PlaceInfoProps> = ({ placeData }) => {
  const place = placeData?.placeDTOResponse;
  const weather = placeData?.weatherPlaceDTOResponse;
  const analitic = placeData?.timeToCatchFish;

  const point = {
    coordinates: place?.coordinates,
    title: `${place?.name} (${place?.typePlace?.name})`,
  };

  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        }}
      >
        {place.requirePayment && (
          <div style={{ position: 'absolute', right: 20, top: 20 }}>{'$'}</div>
        )}

        <h3 style={{ alignSelf: 'center', fontSize: '22px' }}>
          {place.name} (<span>{place.typePlace.name}</span>)
        </h3>
        <p style={{ textIndent: '20px' }}>{place.description}</p>

        {place.photos.length > 0 && (
          <CarouselComponent
            values={place.photos}
            template={CarouselTemplate}
          />
        )}
        <p>
          {'Owner: '}
          {place.owner || 'no'}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        }}
      >
        <h4 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
          {'Good time to fish'}
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            {'Morning'}: <ProgressBar value={analitic.morning}></ProgressBar>
          </div>
          <div>
            {'Afternoon'}:{' '}
            <ProgressBar value={analitic.afternoon}></ProgressBar>
          </div>
          <div>
            {'Evening'}: <ProgressBar value={analitic.evening}></ProgressBar>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
        }}
      >
        <h4 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
          Type of fish
        </h4>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: '15px',
          }}
        >
          {place.fish.map((item, index) => (
            <div key={index}>
              <span className="pi pi-trophy"></span> {item.name}
            </div>
          ))}
        </div>
      </div>
      {weather.tempMax !== '404 NOT_FOUND' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: 300,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            padding: '10px',
            boxShadow: '1px 8px 25px 7px rgba(34, 60, 80, 0.2)',
          }}
        >
          <h4 style={{ fontSize: '20px', marginTop: 0, alignSelf: 'center' }}>
            {'Weather'}
          </h4>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <p>
              {'Max temperature'}: {weather.tempMax}
            </p>
            <p>
              {'Min temperature'}: {weather.tempMin}
            </p>
            <p>
              {'Temperature'}: {weather.temp}
            </p>
            <p>
              {'Time of Sunrise'}: {weather.sunRise}
            </p>
            <p>
              {'Time of Sunset'}: {weather.sunSet}
            </p>
          </div>
        </div>
      )}
      <div>
        <Map point={point} />
      </div>
      <div>
        <Comments comments={place.comments} placeId={place.id} />
      </div>
    </div>
  );
};

export default PlaceInfo;

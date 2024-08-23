import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const textColor = 'black';
const title = '404';
const subTitle = 'The page you’re looking for doesn’t exist.';
const buttonText = 'Back Home';

const NotFound = () => {
  const history = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        minHeight: '70vh',
      }}
    >
      <p
        style={{ color: textColor, fontSize: '26px' }}
        className="font-size-26 font-bold"
      >
        {title}
      </p>
      <p style={{ color: textColor }} className="font-size-14 font-bold">
        {subTitle}
      </p>
      <Button
        label={buttonText}
        onClick={() => history('/')}
        className="p-button font-bold"
      />
    </div>
  );
};

export default NotFound;

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center my-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold my-4">
          Oooops, this country still in progress
        </h1>
        <p className="text-2xl">
          <button onClick={() => navigate(ROUTES.HOME)}>⏮️</button> Back to main
          page{' '}
        </p>
      </div>
    </div>
  );
};

export default NoMatch;

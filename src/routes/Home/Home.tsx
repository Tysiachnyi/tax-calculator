import { redirect, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const route = e.currentTarget.name;

    navigate(route);
  };

  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-4">
            Welcome to the Tax Calculator
          </h1>
          <p className="text-2xl">Please select country </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-10">
          <div>
            <button
              onClick={handleClick}
              className="text-9xl"
              name={ROUTES.CANADA}>
              π¨π¦
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="text-9xl"
              name={ROUTES.USA}>
              πΊπΈ
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="text-9xl"
              name={ROUTES.GERMANY}>
              π©πͺ
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="text-9xl"
              name={ROUTES.FRANCE}>
              π«π·
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

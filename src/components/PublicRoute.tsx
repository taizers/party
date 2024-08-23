import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
// import { getToken } from '../utils/localStorage.ts';

const PublicRoute: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  // const localToken = getToken();

  return !user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PublicRoute;

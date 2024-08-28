import { useEffect, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import {
  setUserData,
  setUserToken,
  setUserLocation,
} from './store/reducers/AuthSlice';
import { getToken } from './utils/localStorage';
import LayOut from './components/Layout';
import NotFound from './pages/NotFound';
import Parties from './pages/Parties';
import './App.css';
import { storeCity, getUserFromToken } from './utils';
import OrganizatorsParties from './pages/OrganizatorsParties';
import AdminsParties from './pages/AdminsParties';
import AdminParty from './pages/AdminParty';
import UserParties from './pages/UserParties';
import UsersParty from './pages/UsersParty';
import OrganizatorsParty from './pages/OrganizatorsParty';
import { adminRole, organizatorRole, userRole } from './constants';
import PrivateRoleRoute from './components/PrivateRoleRoute';
import { createToast } from './utils/toasts';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localToken = getToken();

    if (localToken) {
      const user = getUserFromToken(localToken);

      if (user) {
        dispatch(setUserToken(localToken));
        dispatch(setUserData(user));
      } else {
        dispatch(setUserData({}));
      }
    } else {
      dispatch(setUserData({}));
    }
  }, []);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        storeCity(
          position.coords.latitude,
          position.coords.longitude,
          (data: string) => dispatch(setUserLocation(data))
        );
      });
    } else {
      createToast.error('Geolocation is not available in your browser.');
    }
  }, []);

  return (
    <Routes>
      <Route path={'/'} element={<LayOut />}>
        {/* public routes */}
        <Route index element={<Parties />} />

        <Route element={<PrivateRoleRoute role={adminRole} />}>
          <Route path={'admin'} element={<AdminsParties />} />
          <Route path={'admin/parties/:id'} element={<AdminParty />} />
        </Route>
        
        <Route element={<PrivateRoleRoute role={userRole} />}>
          <Route path={'user'} element={<UserParties />} />
          <Route path={'user/parties/:id'} element={<UsersParty />} />
        </Route>

        <Route element={<PrivateRoleRoute role={organizatorRole} />}>
          <Route path={'organizator'} element={<OrganizatorsParties />} />
          <Route
            path={'organizator/parties/:id'}
            element={<OrganizatorsParty />}
          />
        </Route>

        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

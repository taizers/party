import { useEffect, FC } from 'react';
import type { LoaderFunctionArgs } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from './hooks';
import {
  setUserData,
  setUserToken,
  setUserLocation,
} from './store/reducers/AuthSlice';
import { getToken } from './utils/localStorage';
import LayOut from './components/Layout';
import NotFound from './pages/NotFound';
import Parties from './pages/Parties';
import { storeCity, getUserFromToken } from './utils';
import OrganizatorsParties from './pages/OrganizatorsParties';
import AdminsParties from './pages/AdminsParties';
import AdminParty from './pages/AdminParty';
import UserParties from './pages/UserParties';
import UsersParty from './pages/UsersParty';
import OrganizatorsParty from './pages/OrganizatorsParty';
import { adminRole, organizatorRole, userRole } from './constants.ts';
import { createToast } from './utils/toasts';
import Loader from './components/Loader.tsx';

import './App.css';

const App: FC = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const localToken = getToken();
    const userFromToken = getUserFromToken(localToken);

    dispatch(setUserToken(localToken));
    dispatch(setUserData(userFromToken));

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

  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      Component: LayOut,
      children: [
        {
          index: true,
          Component: Parties,
        },
        {
          path: "admin",
          loader: (request) => protectedByRoleLoader(request, adminRole),
          Component: AdminsParties,
        },
        {
          path: "admin/parties/:id",
          loader: (request) => protectedByRoleLoader(request, adminRole),
          Component: AdminParty,
        },
        {
          path: "user",
          loader: (request) => protectedByRoleLoader(request, userRole),
          Component: UserParties,
        },
        {
          path: "user/parties/:id",
          loader: (request) => protectedByRoleLoader(request, userRole),
          Component: UsersParty,
        },
        {
          path: "organizator",
          loader: (request) => protectedByRoleLoader(request, organizatorRole),
          Component: OrganizatorsParties,
        },
        {
          path: "organizator/parties/:id",
          loader: (request) => protectedByRoleLoader(request, organizatorRole),
          Component: OrganizatorsParty,
        },
        {
          path: "*",
          Component: NotFound,
        },
      ],
    }
  ]);

  function protectedByRoleLoader({ request }: LoaderFunctionArgs, role: string) {
    if (user === null || user.role === role) {
      return null;
    }

    if (user.name) {
      return redirect("/");
    }

    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/?" + params.toString());
  }

  return (
    <RouterProvider router={router} fallbackElement={<Loader />} />
  );
};

export default App;

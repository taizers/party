import { FC, ReactNode, useEffect } from 'react';
import { Menubar as Menu } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useShowErrorToast } from '../hooks';
import { adminRole, organizatorRole, userRole } from '../constants';
import { authApiSlice } from '../store/reducers/AuthApiSlice';
import { localLogout } from '../store/reducers/AuthSlice';
import { createToast } from '../utils/toasts';

interface IMEnuBar {
  setLoginDialogVisible: (data: boolean) => void;
  child: ReactNode;
}

const MenuBar: FC<IMEnuBar> = ({ setLoginDialogVisible, child }) => {
  const history = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const [logout, { data, error }] = authApiSlice.useLogoutMutation();

  useShowErrorToast(error);

  useEffect(() => {
    if (data) {
      dispatch(localLogout());
      createToast.success('Logout completed');
    }
  }, [data]);

  const end = (
    <div className="flex align-items-center gap-2">
      {user === null || !user.name ? (
        <Button
          label="Login"
          icon="pi pi-user"
          onClick={() => setLoginDialogVisible(true)}
        />
      ) : (
        <div style={{ marginRight: '10px', display: 'flex', gap: '10px' }}>
          <p>{`${user.name}`}</p>
          <Button
            label="Logout"
            icon="pi pi-user"
            onClick={() => logout('')}
          />
        </div>
      )}
    </div>
  );

  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => history('/'),
    },
  ];

  if (user?.role === organizatorRole) {
    items.push({
      label: 'Organizator toolbar',
      icon: 'pi pi-home',
      command: () => history('/organizator'),
    });
  }
  if (user?.role === userRole) {
    items.push({
      label: 'User toolbar',
      icon: 'pi pi-star',
      command: () => history('/user'),
    });
  }
  if (user?.role === adminRole) {
    items.push({
      label: 'Admin toolbar',
      icon: 'pi pi-star',
      command: () => history('/admin'),
    });
  }

  return (
    <div style={{ height: '100%' }}>
      <Menu className="menu-bar" model={items} end={end} />
      <div className="app-item">{child}</div>
    </div>
  );
};

export default MenuBar;

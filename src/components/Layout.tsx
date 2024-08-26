import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MenuBar from './MenuBar';
import Login from '../modals/AuthorizationModal';

const LayOut: FC = () => {
  const [isLoginDialogVisible, setLoginDialogVisible] =
    useState<boolean>(false);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MenuBar
        child={<Outlet />}
        setLoginDialogVisible={setLoginDialogVisible}
      />
      <Toaster position="bottom-right" reverseOrder={false} />
      {isLoginDialogVisible && <Login setVisible={setLoginDialogVisible} />}
    </div>
  );
};

export default LayOut;

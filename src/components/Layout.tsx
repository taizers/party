import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { authApiSlice } from '../store/reducers/AuthApiSlice';
import MenuBar from './MenuBar';
import Login from '../modals/AuthorizationModal';

const LayOut: FC = () => {
  //   const { data, error, isLoading } = authApiSlice.useProfileQuery('');
  const [isLoginDialogVisible, setLoginDialogVisible] =
    useState<boolean>(false);
  const isLoading = false;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {!isLoading && (
        <MenuBar
          child={<Outlet />}
          setLoginDialogVisible={setLoginDialogVisible}
        />
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
      {isLoginDialogVisible && <Login setVisible={setLoginDialogVisible} />}
    </div>
  );
};

export default LayOut;

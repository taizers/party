import { FC, useEffect, useRef, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { authApiSlice } from '../store/reducers/AuthApiSlice';
import { useAppDispatch, useAppSelector, useShowErrorToast } from '../hooks';
import { setUserData, setUserToken } from '../store/reducers/AuthSlice';
import { getUserFromToken } from '../utils';
import { setToken } from '../utils/localStorage';
import { createToast } from '../utils/toasts';
import AuthorizationSignUpForm from '../components/AuthorzationSignUpForm';
import AuthorizationLoginForm from '../components/AuthorzationLoginForm';

interface IAuthorizationModal {
  setVisible: (data: boolean) => void;
}

const AuthorizationModal: FC<IAuthorizationModal> = ({ setVisible }) => {
  const [formValue, setFormValue] = useState<'login' | 'signUp'>('login');
  const [login, { data, error }] = authApiSlice.useLoginMutation();
  const [signUp, { data: signUpData, error: signUpError }] =
    authApiSlice.useSignUpMutation();

  const { location } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const refSubmitting = useRef<(data: boolean) => void>(null!);

  useShowErrorToast(error);
  useShowErrorToast(signUpError);

  const onHide = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (error || signUpError) {
      refSubmitting.current(false);
    }
  }, [error, signUpError]);

  useEffect(() => {
    if (signUpData) {
      refSubmitting.current(false);

      setFormValue('login');
      createToast.success('User Created');
    }
  }, [signUpData]);

  useEffect(() => {
    if (data) {
      refSubmitting.current(false);

      const user = getUserFromToken(data.access_token);

      if (user) {
        setToken(data.access_token);
        dispatch(setUserToken(data.access_token));
        dispatch(setUserData(user));
      }

      onHide();
    }
  }, [data]);

  const onFormTypeChange = () => {
    if (formValue === 'login') {
      setFormValue('signUp');
    } else {
      setFormValue('login');
    }
  };

  const onSubmit = (
    values: { confirmpassword?: string },
    setSubmitting: (data: boolean) => void
  ) => {
    refSubmitting.current = setSubmitting;

    if (formValue === 'login') {
      login(values);
    } else {
      delete values.confirmpassword;
      signUp({ ...values, city: location });
    }
  };

  return (
    <Dialog
      visible
      modal
      onHide={onHide}
      content={() => {
        if (formValue === 'login') {
          return (
            <AuthorizationLoginForm
              onCancel={onHide}
              onFormTypeChange={onFormTypeChange}
              onSubmit={onSubmit}
            />
          );
        }
        return (
          <AuthorizationSignUpForm
            onCancel={onHide}
            onFormTypeChange={onFormTypeChange}
            onSubmit={onSubmit}
          />
        );
      }}
    ></Dialog>
  );
};

export default AuthorizationModal;

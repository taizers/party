import { FC } from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import * as Yup from 'yup';
import { MyTextInput } from './FormsFields';

interface AuthorizationLoginFormProps {
  onSubmit: (value: object, setSubmitting: (data: boolean) => void) => void;
  onFormTypeChange: () => void;
  onCancel: () => void;
  isLoading: boolean;
}

const fields = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Username...',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
];

const AuthorizationLoginForm: FC<AuthorizationLoginFormProps> = ({
  onSubmit,
  onCancel,
  onFormTypeChange,
  isLoading
}) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values, setSubmitting);
      }}
    >
      {({ isValid, isSubmitting, dirty }) => (
        <Form
          className="flex flex-column px-6 py-5 gap-2 overflow-y-auto"
          style={{
            borderRadius: '12px',
            backgroundImage:
              'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))',
          }}
        >
          <h3
            style={{ fontSize: '20px' }}
            className="text-primary-50 font-semibold align-self-center"
          >
            {'Login'}
          </h3>
          {fields.map((item, index) => (
            <MyTextInput
              key={index}
              label={item.label}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
            />
          ))}
          <div className="flex align-items-center gap-2">
            <Button
              label={'Login'}
              disabled={isSubmitting || !isValid || !dirty}
              type="submit"
              text
              loading={isLoading}
              className="submitButton p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            ></Button>
            <Button
              label="Cancel"
              onClick={onCancel}
              loading={isLoading}
              text
              className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            ></Button>
          </div>
          <Button
            style={{ height: '20px' }}
            onClick={() => {
              onFormTypeChange();
            }}
            type="button"
            label={"I don't have an account"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AuthorizationLoginForm;

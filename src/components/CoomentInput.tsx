import { FC } from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import * as Yup from 'yup';
import { MyTextTextAria } from './FormsFields';

interface CommentInputProps {
  onSubmit: (
    data: string,
    setSubmitting: (data: boolean) => void,
    resetForm: () => void
  ) => void;
}

const CommentInput: FC<CommentInputProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        comment: '',
      }}
      validationSchema={Yup.object({
        comment: Yup.string()
          .max(200, 'Must be 200 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values.comment, setSubmitting, resetForm);
      }}
    >
      {({ isValid, isSubmitting, dirty }) => (
        <Form
          className="flex flex-column px-4 py-5 gap-2 overflow-y-auto"
          style={{
            borderRadius: '12px',
            backgroundImage:
              'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))',
          }}
        >
          <MyTextTextAria
            label={'Comment'}
            name={'comment'}
            placeholder={'Type your comment...'}
          />
          <Button
            style={{ alignSelf: 'end', minWidth: '150px' }}
            label="Send"
            disabled={isSubmitting || !isValid || !dirty}
            type="submit"
            text
            className="submitButton p-3 text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
          ></Button>
        </Form>
      )}
    </Formik>
  );
};

export default CommentInput;

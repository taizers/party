import { useField } from 'formik';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ReactNode } from 'react';

interface IFormikProps {
  id?: string;
  name: string;
  type?: string;
  style?: object;
  placeholder?: string;
}

interface IMyTextTextAria extends IFormikProps {
  label: string;
}

interface IMyTextInput extends IFormikProps {
  label: string;
}
interface IMySelect extends IFormikProps {
  options: string[];
  value?: string;
  setFieldValue: (data: unknown) => void;
}

interface IMyCheckBox extends IFormikProps {
  children: ReactNode;
}

export const MyTextTextAria = ({ label, style, ...props }: IMyTextTextAria) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ marginBottom: '10px', ...style }}>
      <FloatLabel>
        <InputTextarea
          style={{ width: '100%' }}
          {...field}
          {...props}
          id={props.id || props.name}
          className="bg-white-alpha-20 border-none p-3 text-primary-50"
          autoResize
        />
        <label
          htmlFor={props.id || props.name}
          className="text-primary-50 font-semibold"
        >
          {label}
        </label>
      </FloatLabel>
      {meta.touched && meta.error ? (
        <div style={{ alignSelf: 'center' }} className="field-error">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const MyTextInput = ({ label, style, ...props }: IMyTextInput) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ marginBottom: '10px', ...style }}>
      <div style={{ width: '100%' }} className="inline-flex flex-column gap-2">
        <label
          htmlFor={props.id || props.name}
          className="text-primary-50 font-semibold"
        >
          {label}
        </label>
        <InputText
          {...field}
          {...props}
          id={props.id || props.name}
          className="bg-white-alpha-20 border-none p-3 text-primary-50"
        ></InputText>
      </div>
      {meta.touched && meta.error ? (
        <div style={{ alignSelf: 'center' }} className="field-error">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, style, ...props }: IMyCheckBox) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div style={{ marginBottom: '10px', ...style }}>
      <label className="text-primary-50 font-semibold">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div style={{ alignSelf: 'center' }} className="field-error">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const MySelect = ({
  style,
  setFieldValue,
  value,
  ...props
}: IMySelect) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_field, meta] = useField({ ...props });

  const onChange = (e: DropdownChangeEvent) => {
    setFieldValue(e.value);
  };

  return (
    <div style={{ marginBottom: '10px', width: '100%', ...style }}>
      <Dropdown
        value={value}
        onChange={onChange}
        style={{ width: '100%' }}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div style={{ alignSelf: 'center' }} className="field-error">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

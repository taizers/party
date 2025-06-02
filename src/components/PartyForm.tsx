import { FC, useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MySelect, MyTextInput, MyTextTextAria } from './FormsFields';
import { Button } from 'primereact/button';
import LocationMap from './LocationMap';
import FileUploader from './FileUploader';
import { IParty, IShortItem } from '../types/responce';
import DatePicker from './DatePicker';

interface PartyFormProps {
  onSubmit: (value: object, setSubmitting: (data: boolean) => void) => void;
  onCancel: () => void;
  party?: IParty;
  partyTypes: IShortItem[];
  isLoading: boolean;
}

const PartyForm: FC<PartyFormProps> = ({ onSubmit, onCancel, party, partyTypes, isLoading }) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Formik
      initialValues={{
        name: party?.name || '',
        description: party?.description || '',
        ageRestriction: party?.ageRestriction || '',
        countOfPlaces: party?.countOfPlaces || '',
        city: party?.city || '',
        ticketCost: party?.ticketCost || 0,
        dateOfEvent: party?.dateOfEvent || new Date().toString(),
        type: party?.type || '',
        cords: party?.coordinates || '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(500, 'Must be 500 characters or less')
          .required('Required'),
        city: Yup.string()
          .max(50, 'Must be 50 characters or less')
          .required('Required'),
        dateOfEvent: Yup.string().required('Required'),
        ageRestriction: Yup.number()
          .min(12, 'Must be 12 or more')
          .max(100, 'Must be 100 or less'),
        countOfPlaces: Yup.number()
          .min(1, 'Must be 1 or more')
          .max(200, 'Must be 200 or less')
          .required('Required'),
        type: Yup.string()
          .oneOf(
            partyTypes.map((item) => item.name),
            'Must be selected'
          )
          .required('Required'),
        ticketCost: Yup.number()
          .min(0, 'Cost cannot be less than 0')
          .max(1000, 'Cost cannot be greater than 1000')
          .required('Cost field is required'),
        cords: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const data = {
          coordinates: values.cords,
          name: values.name,
          type: values.type,
          countOfPlaces: values.countOfPlaces,
          ageRestriction: values.ageRestriction || null,
          description: values.description || null,
          city: values.city,
          dateOfEvent: new Date(values.dateOfEvent).toISOString(),
          fileName: file ? file.name : null,
          ticketCost: values.ticketCost
        };

        if (party) {
          onSubmit(data, setSubmitting);
        } else {
          const formData = new FormData();
          formData.append('dto', new Blob([JSON.stringify(data)], { type: 'application/json' }));
          if (file && file instanceof File) {
            formData.append('image', file);
          } else {
            console.log('No valid file to append');
          }

          onSubmit(formData, setSubmitting);
        }
      }}
    >
      {({
          isValid,
          isSubmitting,
          dirty,
          values,
          errors,
          setFieldValue,
          touched,
        }) => {
        return (
          <Form
            className="flex flex-column px-4 py-5 gap-2 overflow-y-auto"
            style={{
              borderRadius: '12px',
              backgroundImage:
                'radial-gradient(circle at left top, var(--primary-800), var(--primary-700))',
            }}
          >
            <h3
              style={{ fontSize: '20px' }}
              className="text-primary-50 font-semibold align-self-center"
            >
              {party ? 'Update Party' : 'Create Party'}
            </h3>
            <MyTextInput
              label={'Name'}
              name={'name'}
              type={'text'}
              placeholder={'Name'}
            />
            <MyTextTextAria
              label={'Description'}
              name={'description'}
              type={'text'}
              style={{ marginTop: '15px' }}
            />
            <MyTextInput
              label={'City'}
              name={'city'}
              type={'text'}
              placeholder={'City'}
            />
            <MyTextInput
              label={'Age Restriction'}
              name={'ageRestriction'}
              type={'number'}
            />
            <MyTextInput
              label={'Ticket cost'}
              name={'ticketCost'}
              type={'number'}
            />
            <MyTextInput
              label={'Count Of Places'}
              name={'countOfPlaces'}
              type={'number'}
            />
            <MySelect
              name={'type'}
              options={partyTypes.map((item) => item.name)}
              value={values.type}
              setFieldValue={(data: unknown) => setFieldValue('type', data)}
              placeholder={'Select type of party'}
            />
            <div>
              <DatePicker
                date={values.dateOfEvent}
                setDate={(date) => setFieldValue('dateOfEvent', date)}
              />
              {errors.dateOfEvent && touched.dateOfEvent && (
                <div className="field-error">{errors.dateOfEvent}</div>
              )}
            </div>
            {!party && (
              <div>
                <FileUploader setFile={setFile} />
                {!file && touched.name && (
                  <div className="field-error">File is required</div>
                )}
              </div>
            )}
            <div>
              <p
                style={{ margin: '10px 0' }}
                className="text-primary-50 font-semibold"
              >
                {'Set Location of Party'}
              </p>
              <LocationMap
                cords={values.cords}
                setCords={(cords) => {
                  setFieldValue('cords', [cords?.lat, cords?.lng].join(','));
                }}
              />
              {errors.cords && touched.cords && (
                <div className="field-error">{errors.cords}</div>
              )}
            </div>
            <div className="flex align-items-center gap-2">
              <Button
                label={party ? 'Update' : 'Create'}
                disabled={isSubmitting || !isValid || !dirty || (!party && !file)}
                type="submit"
                text
                loading={isLoading}
                className="submitButton p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Cancel"
                onClick={onCancel}
                text
                loading={isLoading}
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PartyForm;
import { FC, useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyCheckbox, MyTextInput, MyTextTextAria } from './FormsFields';
import { Button } from 'primereact/button';
import LocationMap from './LocationMap';
import { ICords } from '../types';
import { MultiSelect } from 'primereact/multiselect';
import { fishes, placeTypes } from '../mocks';
import { Dropdown } from 'primereact/dropdown';
import FileUploader from './FileUploader';
import { fileResponse, IShortItem } from '../types/responce';

interface CreatePlaceFormProps {
  onSubmit: (value: object, setSubmitting: (data: boolean) => void) => void;
  onCancel: () => void;
}

interface CreatePlaceData {
  name: string,
  coordinates: string,
  requirePayment: boolean,
  description: string,
  photos: {photoPath: string}[],
  fish: number[],
  typePlace: {id: number},
  owner?: {
    name: string,
    number: string
  }
}

const CreatePlaceForm: FC<CreatePlaceFormProps> = ({ onSubmit, onCancel }) => {
  const [cords, setCords] = useState<ICords>(null!);
  const [selectedFishes, setSelectedFishes] = useState<IShortItem[]>(null!);
  const [selectedTypeOfPlace, setSelectedTypeOfPlace] = useState<IShortItem>(null!);
  const [filesLinks, setFilesLinks] = useState<fileResponse[]>(null!);

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        requirePayment: false,
        ownerName: '',
        ownerPhone: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(500, 'Must be 500 characters or less')
          .required('Required'),
        requirePayment: Yup.boolean(),
        ownerName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        ownerPhone: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const data = {
          coordinates: [cords.lat, cords.lng].join(','),
          photos: filesLinks?.map(item => ({photoPath: item.fileUrl})),
          name: values.name,
          description: values.description,
          fish: selectedFishes.map(item => item.id),
          requirePayment: values.requirePayment,
          typePlace: { id: selectedTypeOfPlace.id},
        } as CreatePlaceData;

        if (values.requirePayment) {
          data.owner = {
            name: values.ownerName,
            number: values.ownerPhone,
          }
        }

        onSubmit(data,setSubmitting);
      }}
    >
      {({ isValid, isSubmitting, dirty, values }) => (
        <Form
          className="flex flex-column px-4 py-5 gap-2 overflow-y-auto"
          style={{
            borderRadius: '12px',
            backgroundImage:
              'radial-gradient(circle at left top, var(--primary-800), var(--primary-700))',
          }}
        >
          <p
            style={{ fontSize: '20px' }}
            className="text-primary-50 font-semibold align-self-center"
          >
            {'Create Place'}
          </p>
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
          <MyCheckbox name={'requirePayment'}>
            {'Place require payment'}
          </MyCheckbox>
          {values.requirePayment && (
            <>
              <MyTextInput
                label={'Owner Name'}
                name={'ownerName'}
                type={'text'}
                placeholder={'Owner Name'}
              />
              <MyTextInput
                label={'Owner Phone'}
                name={'ownerPhone'}
                type={'phone'}
                placeholder={'Owner Phone'}
              />
            </>
          )}
          <MultiSelect
            value={selectedFishes}
            onChange={(e) => setSelectedFishes(e.value)}
            options={fishes}
            optionLabel="name"
            placeholder="Select Fishes"
            maxSelectedLabels={5}
          />
          <Dropdown
            value={selectedTypeOfPlace}
            onChange={(e) => setSelectedTypeOfPlace(e.value)}
            options={placeTypes}
            optionLabel="name"
            placeholder="Select type of place"
          />
          <FileUploader setFilesLinks={setFilesLinks} />
          <div>
            <LocationMap cords={cords} setCords={setCords} />
          </div>
          <div className="flex align-items-center gap-2">
            <Button
              label={'Create'}
              disabled={isSubmitting || !isValid || !dirty}
              type="submit"
              text
              className="submitButton p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            ></Button>
            <Button
              label="Cancel"
              onClick={onCancel}
              text
              className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
            ></Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePlaceForm;

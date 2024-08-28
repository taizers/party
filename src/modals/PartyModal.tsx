import { Dialog } from 'primereact/dialog';
import { FC, useEffect, useRef } from 'react';
import { createToast } from '../utils/toasts';
import { useShowErrorToast } from '../hooks';
import PartyForm from '../components/PartyForm';
import { organizatorApiSlice } from '../store/reducers/OrganizatorApiSlice';
import { IParty, IShortItem, useGetQueryResponce } from '../types/responce';
import { partiesApiSlice } from '../store/reducers/PartiesApiSlice';

interface PartyModalProps {
  setVisible: (data: boolean) => void;
  party?: IParty;
}

const PartyModal: FC<PartyModalProps> = ({ setVisible, party }) => {
  const [createParty, { data, error, isLoading }] =
    organizatorApiSlice.useAddPartyPlaceMutation();
  const [updateParty, { data: updatedData, error: updatedError, isLoading: updatePartyIsLoading }] =
    organizatorApiSlice.useUpdatePartyMutation();

  const { data: partyTypes, error: partyTypesError } =
    partiesApiSlice.useGetPartyTypesQuery<useGetQueryResponce<IShortItem[]>>('');

  const ref = useRef<(data: boolean) => void>(null!);

  useShowErrorToast(error);
  useShowErrorToast(updatedError);
  useShowErrorToast(partyTypesError);

  const onHide = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (data) {
      ref.current(false);
      createToast.success('Party Created');
      onHide();
    }
  }, [data]);

  useEffect(() => {
    if (updatedData) {
      ref.current(false);
      createToast.success('Party Updated');
      onHide();
    }
  }, [updatedData]);

  useEffect(() => {
    if (error || updatedError) {
      ref.current(false);
    }
  }, [error, updatedError]);

  const onSubmit = (values: object, setSubmitting: (data: boolean) => void) => {
    ref.current = setSubmitting;

    if (party) {
      updateParty({ id: party.id, data: values });
    } else {
      createParty(values);
    }
  };

  return (
    <>
      {partyTypes?.length &&<Dialog
        visible
        modal
        style={{ width: '90%', maxWidth: '800px' }}
        onHide={onHide}
        content={() => (
          <PartyForm party={party} isLoading={isLoading || updatePartyIsLoading} partyTypes={partyTypes} onCancel={onHide} onSubmit={onSubmit} />
        )}
      ></Dialog>}
    </>
  );
};

export default PartyModal;

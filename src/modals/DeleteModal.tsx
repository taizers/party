import { Button } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { FC, MouseEvent } from 'react';

interface DeleteModalProps {
  deleteFunction: () => void;
  deleteIcon?: string;
  deleteLabel?: string;
}

const DeleteModal: FC<DeleteModalProps> = ({
  deleteFunction,
  deleteLabel,
  deleteIcon,
}) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    confirmPopup({
      target: event.currentTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept: deleteFunction,
    });
  };

  return (
    <>
      <ConfirmPopup />
      <Button
        onClick={onClick}
        icon={`pi ${deleteIcon}`}
        label={deleteLabel}
        className="p-button-danger"
      ></Button>
    </>
  );
};

export default DeleteModal;

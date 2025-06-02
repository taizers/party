import { toast } from 'react-hot-toast';

interface IErrorType {
  message?: string | unknown;
  status?: number | string;
  data?: {
    message?: string | unknown;
    status?: number | string;
  };

}

export const createToast = {
  error: (error: IErrorType | string) => {
    if (typeof error === 'string') {
      toast.error(`Error: ${error}`);
      return;
    }

    if (typeof error === 'object' && error !== null) {
      const err = error as IErrorType;

      const message =
        err?.data?.message ||
        err?.message ||
        (err?.data && typeof err.data === 'string' ? err.data : null) ||
        'Неизвестная ошибка';

      const statusText = err?.status ? `Error ${err.status}: ` : '';
      toast.error(`${statusText}${message}`);
    }

    toast.error(
      `${error?.status ? `Error ${error?.status}, ` : ''} ${
        error?.message || 'Непредвиденная ошибка'
      }`
    );
  },
  success: (message: string) => {
    toast.success(message);
  },
};

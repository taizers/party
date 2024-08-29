import { clearToken } from './localStorage';
import { createToast } from './toasts';

export const getUserFromToken = (token?: string | null) => {
  if (!token) {
    return {};
  }
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentDate = new Date();

    if (currentDate < payload.exp) {
      const role = payload.realm_access?.roles?.find(
        (item: string) =>
          item === 'ORGANIZER' || item === 'ADMIN' || item === 'USER'
      );

      return {
        name: payload.preferred_username,
        email: payload.email,
        role,
      };
    }

    clearToken();
    return {};
  } catch (err) {
    if (err) {
      createToast.error('Invalid Token');

      clearToken();
      return {};
    }
  }
};

export const storeCity = async (
  lat: number,
  lon: number,
  setCity: (dat: string) => void
) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&extratags=1`
  ).then((response) => response.json());

  setCity(response?.address?.state);
};

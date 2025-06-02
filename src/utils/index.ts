import { clearToken } from './localStorage';
import { createToast } from './toasts';

export const getUserFromToken = (token?: string | null) => {
  if (!token) {
    return {};
  }

  try {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    const currentTimestamp = Math.floor(Date.now() / 1000);

    if (payload.exp && currentTimestamp > payload.exp) {
      throw new Error('Token expired');
    }

    const userData = {
      name: payload.preferred_username || payload.name || payload.sub || 'Unknown',
      email: payload.email || payload.upn || payload.unique_name || '',
      role: getRoleFromPayload(payload),
      fullPayload: payload // Для отладки
    };

    return userData;
  } catch (err) {
    console.error('Failed to parse token:', err);
    clearToken();
    createToast.error('Invalid or expired token');
    return {};
  }
};

const getRoleFromPayload = (payload: any): string => {
  if (payload.realm_access?.roles) {
    const role = payload.realm_access.roles.find((item: string) =>
      ['ORGANIZER', 'ADMIN', 'USER'].includes(item)
    );
    if (role) return role;
  }

  if (payload.roles) {
    const role = payload.roles.find((item: string) =>
      ['ORGANIZER', 'ADMIN', 'USER'].includes(item)
    );
    if (role) return role;
  }

  if (payload.role) {
    return payload.role;
  }

  return 'USER';
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

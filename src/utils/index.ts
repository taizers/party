// import { clearToken } from './localStorage';

export const getUserFromToken = (token: string) => {
  const payload = JSON.parse(atob(token.split('.')[1]));
  const currentDate = new Date();
  //TODO change > to <
  if (currentDate > payload.exp) {
    const roles = payload.realm_access?.roles?.filter((item: string) => {
      const words = item.split('_');

      if (words[words.length - 1] === 'REALM') {
        return true;
      }
    });

    return {
      name: payload.name,
      login: payload.preferred_username,
      email: payload.email,
      given_name: payload.given_name,
      family_name: payload.family_name,
      roles,
    };
  } else {
    // clearToken();
  }
};

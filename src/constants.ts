export const TOKEN_KEY = 'access_token';
export const apiUrl = '';
export const defaultDelay = 500;
export const defaultCurrentPage = 0;
export const defaultPaginationPage = 0;
export const defaultPaginationLimit = 10;

export const laptopBreakPoint = 1024;
export const tabletBreakPoint = 768;
export const mobileBreakPoint = 500;

export const responsiveOptions = [
  {
    breakpoint: `${laptopBreakPoint}px`,
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: `${tabletBreakPoint}px`,
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: `${mobileBreakPoint}px`,
    numVisible: 1,
    numScroll: 1,
  },
];

export const adminRole = 'ADMIN';
export const userRole = 'USER';
export const organizatorRole = 'ORGANIZER';

export const roleLabels = {
  userRole: 'user',
  adminRole: 'admin',
  organizatorRole: 'organizator',
};

export const waitStatuses = [
  'WAIT_FOR_CREATING',
  'WAIT_FOR_DELETING',
  'WAIT_FOR_UPDATING',
];

export const notFoundTextColor = 'black';
export const notFoundTitle = '404';
export const notFoundSubTitle = 'The page you’re looking for doesn’t exist.';
export const notFoundButtonText = 'Back Home';

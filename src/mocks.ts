export const placeItemMock = {
  placeDTOResponse: {
    id: 2,
    name: 'Свитязь',
    coordinates: '54.618°,25.173°',
    description:
      'Находится в Гродненской области. Озеро Свитязь является самым глубоким озером в Беларуси и привлекает туристов своей красотой и чистотой воды.',
    requirePayment: true,
    owner: null,
    typePlace: {
      id: 2,
      name: 'Озеро',
    },
    photos: [
      {
        photoPath:
          'https://downloader.disk.yandex.ru/disk/15724a68f3f371866de1469d7199c7ba565f1a898146d32dc7e7ef46386997f/66bf4914/0otFc_nzep39fQhSdhCWuIZpDrS3h2VB_OZLdB3YIWpytkWztHtn-ARJ9eGFqPb3cT8dNhw5uXaleGG72kAJaA%3D%3D?uid=1645277963&filename=001290_310086ec6ff877d2b9e0ef09798cbae8.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=11251&hid=32154729a7676e853167fa7d10355f83&media_type=image&tknv=v2&etag=972de9ccca7c53e00acadcd8b958d919',
      },
    ],
    fish: [
      {
        id: 3,
        name: 'Карп',
      },
      {
        id: 6,
        name: 'Треска',
      },
    ],
    comments: [
      {
        id: 2,
        text: 'клёва совсем нету хоть место красивое',
        grade: 2,
        user: {
          id: 3,
          name: 'egor',
        },
      },
      {
        id: 5,
        text: 'Очень красивое место, но рыбы почти нет',
        grade: 3,
        user: {
          id: 1,
          name: 'artem',
        },
      },
      {
        id: 8,
        text: 'Прекрасное озеро, отличные условия для отдыха',
        grade: 4,
        user: {
          id: 4,
          name: 'misha',
        },
      },
    ],
  },
  timeToCatchFish: {
    afternoon: 75,
    morning: 50,
    evening: 25,
  },
  weatherPlaceDTOResponse: {
    tempMax: '404 NOT_FOUND',
    tempMin: 'WeatherAPIServiceException',
    temp: 'Weather service unavailable',
    sunRise: 'unavailable',
    sunSet: 'unavailable',
  },
};

export const newsItemMock = {
  id: 3,
  title: 'Title 3',
  annotation:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  photos: [
    {
      photoPath:
        'https://www.theemotionmachine.com/wp-content/uploads/2021/03/53d05da0-19c1-48f8-ac0d-9a57498a4697.jpeg',
    },
  ],
};

export const partyMock = {
  id: 6,
  name: 'Хэллоуинская Ночь',
  type: 'ROCK',
  city: 'Минск',
  statusOfParticipationRequest: '',
  organizerUsername: 'mihail123fd',
  ageRestriction: 18,
  guests: [
    {
      id: 3,
      age: 18,
      username: 'some',
      rating: 3.0,
    },
  ],
  countOfPlaces: 50,
  description:
    'Тематика вечера — хоррор, с костюмированным конкурсом и призами.',
  coordinates: '54.953,27.618',
  minimalRating: 0,
  ticketCost: 55,
  dateOfEvent: '2025-11-01T22:00:00',
};

export const listOfPartiesMock = {
  totalElements: 10,
  content: [
    {
      id: 6,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      organizerUsername: 'mihail123fd',
      ageRestriction: 18,
      guests: [],
      countOfPlaces: 50,
      description:
        'Тематика вечера — хоррор, с костюмированным конкурсом и призами.',
      coordinates: '54.953,27.618',
      minimalRating: 0,
      ticketCost: 55,
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 8,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      organizerUsername: 'mihail123fd',
      ageRestriction: 18,
      guests: [],
      countOfPlaces: 100,
      description:
        'Летний вечер в стиле 80-х с живой музыкой и танцами до утра.',
      coordinates: '54.953,27.618',
      minimalRating: 0,
      ticketCost: 60,
      dateOfEvent: '2025-08-15T20:00:00',
    },
  ],
};

export const organizatorslistOfPartiesMock = {
  totalElements: 10,
  content: [
    {
      id: 1,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'UNAVAILABLE',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 2,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'WAIT_FOR_DELETING',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 3,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'WAIT_FOR_UPDATING',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 4,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'WAIT_FOR_CREATING',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 5,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 100,
      organizerUsername: 'mihail123fd',
      ticketCost: 60,
      status: 'PENDING_REVISION',
      dateOfEvent: '2025-08-15T20:00:00',
    },
    {
      id: 6,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 100,
      organizerUsername: 'mihail123fd',
      ticketCost: 60,
      status: 'REJECTED_FOR_UPDATE',
      dateOfEvent: '2025-08-15T20:00:00',
    },
  ],
};

export const userslistOfPartiesMock = {
  totalElements: 10,
  content: [
    {
      id: 6,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 50,
      organizerUsername: 'mihail123fd',
      ticketCost: 55,
      status: 'ACCEPTED',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 8,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 100,
      organizerUsername: 'mihail123fd',
      ticketCost: 60,
      status: 'REJECTED',
      dateOfEvent: '2025-08-15T20:00:00',
    },
    {
      id: 9,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 100,
      organizerUsername: 'mihail123fd',
      ticketCost: 60,
      status: 'IN_PROCESS',
      dateOfEvent: '2025-08-15T20:00:00',
    },
  ],
};
export const adminslistOfPartiesMock = {
  totalElements: 10,
  content: [
    {
      id: 1,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'UNAVAILABLE',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 2,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'WAIT_FOR_DELETING',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 3,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'WAIT_FOR_UPDATING',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 4,
      name: 'Хэллоуинская Ночь',
      type: 'ROCK',
      ageRestriction: 18,
      organizerUsername: 'mihail123fd',
      countOfPlaces: 50,
      ticketCost: 55,
      status: 'WAIT_FOR_CREATING',
      dateOfEvent: '2025-11-01T22:00:00',
    },
    {
      id: 5,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 100,
      organizerUsername: 'mihail123fd',
      ticketCost: 60,
      status: 'PENDING_REVISION',
      dateOfEvent: '2025-08-15T20:00:00',
    },
    {
      id: 6,
      name: 'Ретро-Вечеринка',
      type: 'ROCK',
      ageRestriction: 18,
      countOfPlaces: 100,
      organizerUsername: 'mihail123fd',
      ticketCost: 60,
      status: 'REJECTED_FOR_UPDATE',
      dateOfEvent: '2025-08-15T20:00:00',
    },
  ],
};

export const partyTypes = [
  {
    id: 1,
    name: 'TECHO',
  },
  {
    id: 2,
    name: 'ROCK',
  },
];

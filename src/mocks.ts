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

export const listOfPlacesMock = {
  pageSize: 1,
  itemCounts: 3,
  items: [
    {
      id: 1,
      name: 'Нарочь',
      coordinates: '54.953°,27.618°',
      requirePayment: true,
      typePlace: {
        id: 1,
        name: 'Речка',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
      ],
    },
    {
      id: 2,
      name: 'Свитязь',
      coordinates: '54.618°,25.173°',
      requirePayment: false,
      typePlace: {
        id: 2,
        name: 'Озеро',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
      ],
    },
    {
      id: 3,
      name: 'Припять',
      coordinates: '52.167°,28.643°',
      requirePayment: true,
      typePlace: {
        id: 1,
        name: 'Речка',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/44ca1d43b4d4cb0fdef3c92f5f9f8a8700093f75838b1689ce9cac86f17de977/66c4e148/0otFc_nzep39fQhSdhCWuEZz2eL-3oMS2vSrZHq7Cekm7KsK-ubaTl4lg3KSQ4onK3mARcAeTCEECsuiGvbbFw%3D%3D?uid=1645277963&filename=images.png&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=1156&hid=3d979494e162cba5f7f957577f70d94e&media_type=image&tknv=v2&etag=b0b920f6bc55e44cf542f0c3a3d1358b',
        },
      ],
    },
    {
      id: 4,
      name: 'Смольнянское озеро',
      coordinates: '54.889°,27.530°',
      requirePayment: false,
      typePlace: {
        id: 1,
        name: 'Речка',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/21c74606c8cb2b4ccb147d9c797bcbe75f7bdbfa01a8558df012ebb2f2749fc/66bf4917/0otFc_nzep39fQhSdhCWuI8HVekay7FNtt4pr-beG42cIzz_b8FNwZ3E5nzcPeXFpXl3UbUdQsdCYxGvVGcs7A%3D%3D?uid=1645277963&filename=2016_20_skidel_otdyh_skidel_otdyh_kotra.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=5085&hid=53462e22b49fa2e3703a30b8f0dca134&media_type=image&tknv=v2&etag=67f4adefe2c98a21adaba0baab329dd5',
        },
      ],
    },
    {
      id: 5,
      name: 'Смольнянское озеро',
      coordinates: '54.889°,27.530°',
      requirePayment: false,
      typePlace: {
        id: 1,
        name: 'Речка',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/21c74606c8cb2b4ccb147d9c797bcbe75f7bdbfa01a8558df012ebb2f2749fc/66bf4917/0otFc_nzep39fQhSdhCWuI8HVekay7FNtt4pr-beG42cIzz_b8FNwZ3E5nzcPeXFpXl3UbUdQsdCYxGvVGcs7A%3D%3D?uid=1645277963&filename=2016_20_skidel_otdyh_skidel_otdyh_kotra.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=5085&hid=53462e22b49fa2e3703a30b8f0dca134&media_type=image&tknv=v2&etag=67f4adefe2c98a21adaba0baab329dd5',
        },
      ],
    },
    {
      id: 6,
      name: 'Смольнянское озеро',
      coordinates: '54.889°,27.530°',
      requirePayment: false,
      typePlace: {
        id: 1,
        name: 'Речка',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/21c74606c8cb2b4ccb147d9c797bcbe75f7bdbfa01a8558df012ebb2f2749fc/66bf4917/0otFc_nzep39fQhSdhCWuI8HVekay7FNtt4pr-beG42cIzz_b8FNwZ3E5nzcPeXFpXl3UbUdQsdCYxGvVGcs7A%3D%3D?uid=1645277963&filename=2016_20_skidel_otdyh_skidel_otdyh_kotra.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=5085&hid=53462e22b49fa2e3703a30b8f0dca134&media_type=image&tknv=v2&etag=67f4adefe2c98a21adaba0baab329dd5',
        },
      ],
    },
    {
      id: 7,
      name: 'Смольнянское озеро',
      coordinates: '54.889°,27.530°',
      requirePayment: false,
      typePlace: {
        id: 1,
        name: 'Речка',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/21c74606c8cb2b4ccb147d9c797bcbe75f7bdbfa01a8558df012ebb2f2749fc/66bf4917/0otFc_nzep39fQhSdhCWuI8HVekay7FNtt4pr-beG42cIzz_b8FNwZ3E5nzcPeXFpXl3UbUdQsdCYxGvVGcs7A%3D%3D?uid=1645277963&filename=2016_20_skidel_otdyh_skidel_otdyh_kotra.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=5085&hid=53462e22b49fa2e3703a30b8f0dca134&media_type=image&tknv=v2&etag=67f4adefe2c98a21adaba0baab329dd5',
        },
      ],
    },
    {
      id: 8,
      name: 'Озеро Белое',
      coordinates: '53.758°,27.501°',
      requirePayment: true,
      typePlace: {
        id: 2,
        name: 'Озеро',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/638e6edecf112e3d661d2ad5ad11ac618252a2f5c97ea86a558d518752e3a3cf/66bf4919/0otFc_nzep39fQhSdhCWuCP73hVpSD9TAfioXquOWyF008c70fsGr69xEn4i7i88OoocR6_lZ2H-hh1vkE4iHg%3D%3D?uid=1645277963&filename=neman3.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=12408&hid=609cdb74cd4d486d6156ed2215bc78f5&media_type=image&tknv=v2&etag=11be8676c13a88bcbc23a8c3faa93633',
        },
      ],
    },
    {
      id: 9,
      name: 'Озеро Белое',
      coordinates: '53.758°,27.501°',
      requirePayment: true,
      typePlace: {
        id: 2,
        name: 'Озеро',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/638e6edecf112e3d661d2ad5ad11ac618252a2f5c97ea86a558d518752e3a3cf/66bf4919/0otFc_nzep39fQhSdhCWuCP73hVpSD9TAfioXquOWyF008c70fsGr69xEn4i7i88OoocR6_lZ2H-hh1vkE4iHg%3D%3D?uid=1645277963&filename=neman3.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=12408&hid=609cdb74cd4d486d6156ed2215bc78f5&media_type=image&tknv=v2&etag=11be8676c13a88bcbc23a8c3faa93633',
        },
      ],
    },
    {
      id: 10,
      name: 'Озеро Белое',
      coordinates: '53.758°,27.501°',
      requirePayment: true,
      typePlace: {
        id: 2,
        name: 'Озеро',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/638e6edecf112e3d661d2ad5ad11ac618252a2f5c97ea86a558d518752e3a3cf/66bf4919/0otFc_nzep39fQhSdhCWuCP73hVpSD9TAfioXquOWyF008c70fsGr69xEn4i7i88OoocR6_lZ2H-hh1vkE4iHg%3D%3D?uid=1645277963&filename=neman3.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=12408&hid=609cdb74cd4d486d6156ed2215bc78f5&media_type=image&tknv=v2&etag=11be8676c13a88bcbc23a8c3faa93633',
        },
      ],
    },
    {
      id: 11,
      name: 'Озеро Белое',
      coordinates: '53.758°,27.501°',
      requirePayment: true,
      typePlace: {
        id: 2,
        name: 'Озеро',
      },
      photos: [
        {
          photoPath:
            'https://downloader.disk.yandex.ru/disk/638e6edecf112e3d661d2ad5ad11ac618252a2f5c97ea86a558d518752e3a3cf/66bf4919/0otFc_nzep39fQhSdhCWuCP73hVpSD9TAfioXquOWyF008c70fsGr69xEn4i7i88OoocR6_lZ2H-hh1vkE4iHg%3D%3D?uid=1645277963&filename=neman3.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1645277963&fsize=12408&hid=609cdb74cd4d486d6156ed2215bc78f5&media_type=image&tknv=v2&etag=11be8676c13a88bcbc23a8c3faa93633',
        },
      ],
    },
  ],
};

export const fishes = [
  {
    id: 1,
    name: 'Карась',
  },
  {
    id: 2,
    name: 'Окунь',
  },
];

export const placeTypes = [
  {
    id: 1,
    name: 'Озеро',
  },
  {
    id: 2,
    name: 'Река',
  },
];

export const adminNewsMock = {
  itemCounts: 3,
  items: [
    {
      id: 1,
      title: 'Title 1',
      user: {
        id: 1,
        name: 'alex',
      },
      status: false,
    },
    {
      id: 2,
      title: 'Title 2',
      user: {
        id: 2,
        name: 'ne Alex',
      },
      status: true,
    },
    {
      id: 3,
      title: 'Title 3',
      user: {
        id: 2,
        name: 'ne Alex',
      },
      status: false,
    },
  ],
};

export const adminPlacesMock = {
  itemCounts: 3,
  items: [
    {
      id: 1,
      name: 'Place 1',
      typePlace: 'River',
      user: {
        id: 1,
        name: 'alex',
      },
      status: false,
    },
    {
      id: 2,
      name: 'Place 2',
      typePlace: 'River',
      user: {
        id: 2,
        name: 'ne Alex',
      },
      status: true,
    },
    {
      id: 3,
      name: 'Place 3',
      typePlace: 'River',
      user: {
        id: 2,
        name: 'ne Alex',
      },
      status: false,
    },
  ],
};

export const adminCommentsMock = {
  itemCounts: 3,
  items: [
    {
      id: 1,
      text: 'Some text Comment',
      grade: 3,
      user: {
        id: 1,
        name: 'alex',
      },
      status: false,
    },
    {
      id: 2,
      text: 'Some text Comment 2',
      grade: 1,
      user: {
        id: 2,
        name: 'ne Alex',
      },
      status: true,
    },
    {
      id: 3,
      text: 'Some text Comment 3',
      grade: 2,
      user: {
        id: 2,
        name: 'ne Alex',
      },
      status: false,
    },
  ],
};

export const newsMock = {
  itemCounts: 3,
  items: [
    {
      id: 1,
      title: 'Title 1',
      isAlarm: true,
      annotation:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      photos: [
        {
          photoPath:
            'https://www.theemotionmachine.com/wp-content/uploads/2021/03/53d05da0-19c1-48f8-ac0d-9a57498a4697.jpeg',
        },
      ],
    },
    {
      id: 2,
      title: 'Title 2',
      isAlarm: true,
      annotation:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      photos: [
        {
          photoPath:
            'https://www.theemotionmachine.com/wp-content/uploads/2021/03/53d05da0-19c1-48f8-ac0d-9a57498a4697.jpeg',
        },
      ],
    },
    {
      id: 3,
      title: 'Title 3',
      isAlarm: false,
      annotation:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      photos: [
        {
          photoPath:
            'https://www.theemotionmachine.com/wp-content/uploads/2021/03/53d05da0-19c1-48f8-ac0d-9a57498a4697.jpeg',
        },
      ],
    },
  ],
};

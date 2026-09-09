export type CategoryId =
  | 'aesthetic'
  | 'hardware'
  | 'laser'
  | 'massage'
  | 'consultation'
  | 'medical';

export type Service = {
  slug: string;
  categoryId: CategoryId;
  title: string;
  shortTitle: string;
  summary: string;
  forWhom: string;
  duration: string;
  price: string | null;
  consultationNote: string | null;
  details: string[];
  featured: boolean;
  medical: boolean;
  publishReady: boolean;
};

type MedicalConfig = {
  medicalServicesEnabled: boolean;
  licenseHolder: string;
  licenseNumber: string;
  licenseRegistryUrl: string;
  licenseWorks: string[];
  verifiedDoctors: string[];
};

/**
 * Медицинские услуги можно включить только после проверки документов.
 * 1. Укажите держателя и номер действующей лицензии, ссылку на запись в реестре
 *    и перечень разрешённых работ.
 * 2. Добавьте подтверждённых специалистов в verifiedDoctors и заполните их
 *    образование, аккредитацию и стаж.
 * 3. Добавьте реальные услуги в medicalServiceDrafts с publishReady: true.
 * 4. Только после этого переключите medicalServicesEnabled на true.
 */
export const medicalConfig: MedicalConfig = {
  medicalServicesEnabled: false,
  licenseHolder: '',
  licenseNumber: '',
  licenseRegistryUrl: '',
  licenseWorks: [],
  verifiedDoctors: [],
};

export const siteData = {
  brand: {
    name: 'Клиника Дарьи Долгушиной',
    secondaryName: 'Skin Cosm',
    shortName: 'ДД',
    instagramHandle: '@dolgushina_clinic',
  },
  seo: {
    localFallbackUrl: 'http://localhost:3000',
    defaultTitle: 'Косметология в Екатеринбурге',
    defaultDescription:
      'Эстетическая и аппаратная косметология, лазерная эпиляция и массаж в центре Екатеринбурга. Понятный выбор процедур и онлайн-запись.',
  },
  contacts: {
    city: 'Екатеринбург',
    address: 'улица Маршала Жукова, 13, 1 этаж',
    hours: 'Ежедневно 09:00–21:00, по предварительной записи',
    phone: '+7 912 234-90-61',
    phoneHref: 'tel:+79122349061',
    whatsapp: 'https://wa.me/79122349061',
    telegram: 'https://t.me/dolgushina_clinic',
  },
  links: {
    booking:
      'https://n371155.yclients.com/company/353604/personal/select-services?o=',
    instagram: 'https://www.instagram.com/dolgushina_clinic/',
    yandexMaps: 'https://yandex.com/maps/org/skin_cosm/53742534634/',
    twoGis: 'https://2gis.ru/ekaterinburg/firm/70000001088889590',
  },
  legal: {
    operator: 'ИП Долгушина Дарья Александровна',
    inn: '660313897633',
    ogrnip: '323665800028220',
  },
  metrics: {
    yandexMetrikaId: '',
  },
} as const;

export const serviceCategories: ReadonlyArray<{
  id: Exclude<CategoryId, 'medical'>;
  title: string;
  navTitle: string;
  description: string;
  fit: string;
}> = [
  {
    id: 'aesthetic',
    title: 'Эстетическая косметология',
    navTitle: 'Эстетический уход',
    description:
      'Очищение и поддерживающие уходовые программы с учётом текущего состояния кожи.',
    fit: 'Если хочется выстроить понятный уход или уделить внимание тону и текстуре кожи.',
  },
  {
    id: 'hardware',
    title: 'Аппаратная косметология',
    navTitle: 'Аппаратный уход',
    description:
      'Аппаратные процедуры для лица и тела с предварительным обсуждением задач и ограничений.',
    fit: 'Если нужен последовательный курс или дополнение к регулярному уходу.',
  },
  {
    id: 'laser',
    title: 'Лазерная эпиляция',
    navTitle: 'Лазерная эпиляция',
    description:
      'Процедуры для отдельных зон лица и тела с индивидуальным выбором параметров.',
    fit: 'Если важно сократить регулярный домашний уход за выбранной зоной.',
  },
  {
    id: 'massage',
    title: 'Массаж',
    navTitle: 'Массаж',
    description:
      'Ручные техники для лица и тела в спокойном ритме и по предварительной записи.',
    fit: 'Если хочется уделить время расслаблению и бережной работе с тканями.',
  },
  {
    id: 'consultation',
    title: 'Консультации специалистов',
    navTitle: 'Консультации',
    description:
      'Встреча, на которой можно обсудить запрос, уход и подходящий порядок процедур.',
    fit: 'Если сложно выбрать услугу самостоятельно или есть вопросы перед записью.',
  },
];

const nonMedicalServices: Service[] = [
  {
    slug: 'personal-care',
    categoryId: 'aesthetic',
    title: 'Персональный уход за лицом',
    shortTitle: 'Персональный уход',
    summary:
      'Процедура подбирается после знакомства с вашей кожей и тем, как вы ухаживаете за ней дома.',
    forWhom:
      'Тем, кто хочет выстроить регулярный профессиональный уход без перегруженной программы.',
    duration: 'Ориентир — 60–90 минут',
    price: null,
    consultationNote: 'Финальный состав процедуры специалист определит перед началом.',
    details: [
      'Коротко обсудим ваш запрос и привычный домашний уход.',
      'Подберём формат процедуры без обещаний гарантированного результата.',
      'После встречи дадим понятные рекомендации по дальнейшему уходу.',
    ],
    featured: true,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'cleansing-care',
    categoryId: 'aesthetic',
    title: 'Комплексный уход с очищением',
    shortTitle: 'Уход с очищением',
    summary:
      'Последовательный уход, направленный на деликатное очищение и комфорт кожи.',
    forWhom:
      'Тем, кому хочется обновить привычный уход и обсудить способы бережного очищения.',
    duration: 'Ориентир — 60–90 минут',
    price: null,
    consultationNote: 'Интенсивность и этапы зависят от состояния кожи в день визита.',
    details: [
      'Оценим текущее состояние кожи перед процедурой.',
      'Согласуем комфортный объём и последовательность этапов.',
      'Расскажем, как поддержать результат домашним уходом.',
    ],
    featured: false,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'hardware-face-care',
    categoryId: 'hardware',
    title: 'Аппаратный уход за лицом',
    shortTitle: 'Аппаратный уход для лица',
    summary:
      'Формат и параметры аппаратной процедуры специалист подбирает после очного знакомства.',
    forWhom:
      'Тем, кто рассматривает аппаратный уход и хочет сначала понять его место в общей программе.',
    duration: 'Ориентир — 45–75 минут',
    price: null,
    consultationNote:
      'Перед записью важно сообщить специалисту об индивидуальных ограничениях.',
    details: [
      'Уточним задачу и прошлый опыт аппаратных процедур.',
      'Объясним выбранный формат простым языком.',
      'Согласуем дальнейший план без навязывания курса.',
    ],
    featured: true,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'hardware-body-care',
    categoryId: 'hardware',
    title: 'Аппаратный уход за телом',
    shortTitle: 'Аппаратный уход для тела',
    summary:
      'Работа с выбранной зоной тела на оборудовании с индивидуальной настройкой процедуры.',
    forWhom:
      'Тем, кто хочет дополнить привычный уход за телом аппаратной процедурой.',
    duration: 'Зависит от выбранной зоны',
    price: null,
    consultationNote:
      'Продолжительность и возможность проведения уточняются до визита.',
    details: [
      'Выберем зону и комфортную продолжительность.',
      'До начала объясним ход процедуры и ощущения.',
      'Дадим рекомендации по уходу после визита.',
    ],
    featured: false,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'laser-small-zone',
    categoryId: 'laser',
    title: 'Лазерная эпиляция небольшой зоны',
    shortTitle: 'Лазерная эпиляция · малая зона',
    summary:
      'Процедура для одной небольшой зоны. Конкретную зону можно выбрать в онлайн-записи.',
    forWhom:
      'Тем, кто начинает знакомство с лазерной эпиляцией или работает с одной зоной.',
    duration: 'Обычно 15–30 минут',
    price: null,
    consultationNote:
      'Перед визитом ознакомьтесь с подготовкой в карточке записи или уточните её у специалиста.',
    details: [
      'Перед началом уточним подготовку и индивидуальные особенности.',
      'Согласуем зону и параметры процедуры.',
      'После визита напомним рекомендации по уходу.',
    ],
    featured: true,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'laser-body-zone',
    categoryId: 'laser',
    title: 'Лазерная эпиляция зоны тела',
    shortTitle: 'Лазерная эпиляция · тело',
    summary:
      'Запись на одну или несколько зон тела с продолжительностью, зависящей от объёма процедуры.',
    forWhom:
      'Тем, кто уже выбрал зону или хочет уточнить подходящий формат перед визитом.',
    duration: 'Зависит от количества зон',
    price: null,
    consultationNote:
      'Точное время и подготовку проверьте при выборе зон в Yclients.',
    details: [
      'Выберите зоны в сервисе онлайн-записи.',
      'Сообщите специалисту о прошлых процедурах и реакции кожи.',
      'Следуйте персональным рекомендациям после визита.',
    ],
    featured: false,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'face-massage',
    categoryId: 'massage',
    title: 'Массаж лица',
    shortTitle: 'Массаж лица',
    summary:
      'Ручная процедура в спокойном темпе с акцентом на комфорт и деликатную работу.',
    forWhom:
      'Тем, кто хочет добавить массаж к уходу за лицом или выбрать отдельный расслабляющий визит.',
    duration: 'Ориентир — 45–60 минут',
    price: null,
    consultationNote: null,
    details: [
      'Перед началом обсудим комфортную интенсивность.',
      'Процедура проходит без спешки и агрессивных техник.',
      'При необходимости подскажем, как сочетать массаж с уходом.',
    ],
    featured: true,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'body-massage',
    categoryId: 'massage',
    title: 'Массаж тела',
    shortTitle: 'Массаж тела',
    summary:
      'Сеанс ручного массажа с выбором продолжительности и зон работы при записи.',
    forWhom:
      'Тем, кто хочет запланировать время на расслабление и телесный комфорт.',
    duration: 'Продолжительность выбирается при записи',
    price: null,
    consultationNote: null,
    details: [
      'Уточним пожелания и зоны, которым стоит уделить внимание.',
      'Согласуем интенсивность до начала сеанса.',
      'Оставим достаточно времени на спокойное завершение визита.',
    ],
    featured: false,
    medical: false,
    publishReady: true,
  },
  {
    slug: 'initial-consultation',
    categoryId: 'consultation',
    title: 'Первичная консультация специалиста',
    shortTitle: 'Первичная консультация',
    summary:
      'Разговор о вашем запросе, текущем уходе и возможных следующих шагах без обязательства сразу выбирать процедуру.',
    forWhom:
      'Тем, кто впервые приходит в клинику или сомневается между несколькими направлениями.',
    duration: 'Ориентир — 30–45 минут',
    price: null,
    consultationNote:
      'Консультация не заменяет медицинскую диагностику и не предполагает постановку диагноза.',
    details: [
      'Соберём контекст и уточним, что для вас важно.',
      'Обсудим доступные немедицинские направления.',
      'Сформируем понятный порядок действий или оставим время на решение.',
    ],
    featured: true,
    medical: false,
    publishReady: true,
  },
];

const medicalServiceDrafts: Service[] = [];

export const publicServices: Service[] = [
  ...nonMedicalServices,
  ...(medicalConfig.medicalServicesEnabled
    ? medicalServiceDrafts.filter((service) => service.publishReady)
    : []),
];

export const specialists: ReadonlyArray<{
  name: string;
  specialty: string;
  education: string;
  accreditation: string;
  experience: string;
  directions: string[];
  photo: string;
  bookingUrl: string;
}> = [];

export const reviewsConfig = {
  lastCheckedAt: '',
  platforms: [
    {
      name: 'Яндекс Карты',
      rating: null as number | null,
      reviewCount: null as number | null,
      url: siteData.links.yandexMaps,
    },
    {
      name: '2ГИС',
      rating: null as number | null,
      reviewCount: null as number | null,
      url: siteData.links.twoGis,
    },
  ],
} as const;

export const approach = [
  {
    title: 'Сначала понять',
    text: 'Обсуждаем ваш запрос, привычки и ожидания до того, как предложить формат процедуры.',
  },
  {
    title: 'Объяснить спокойно',
    text: 'Рассказываем о ходе процедуры и ограничениях понятным языком, без давления.',
  },
  {
    title: 'Сохранить ваше',
    text: 'Ориентируемся на аккуратный уход и естественное восприятие внешности.',
  },
] as const;

export const faq = [
  {
    question: 'Как выбрать процедуру, если я не уверена?',
    answer:
      'Начните с консультации специалиста или напишите в WhatsApp. Вы сможете описать запрос и выбрать подходящее немедицинское направление без спешки.',
  },
  {
    question: 'Где посмотреть актуальную стоимость?',
    answer:
      'Цены не перенесены на сайт без подтверждённого прайса. Актуальные услуги, длительность и стоимость открываются в сервисе онлайн-записи Yclients.',
  },
  {
    question: 'Нужно ли записываться заранее?',
    answer:
      'Да. Клиника работает ежедневно с 09:00 до 21:00 по предварительной записи.',
  },
  {
    question: 'Как подготовиться к лазерной эпиляции?',
    answer:
      'Требования зависят от выбранной зоны и оборудования. Проверьте памятку в карточке онлайн-записи или уточните подготовку у специалиста в WhatsApp.',
  },
  {
    question: 'Можно ли записаться через мессенджер?',
    answer:
      'Да. Напишите в WhatsApp или Telegram. Для самостоятельного выбора времени используйте Yclients.',
  },
  {
    question: 'Есть ли на сайте инъекционные процедуры?',
    answer:
      'Нет. Они скрыты, пока клиника не предоставит подтверждённые сведения о медицинской лицензии, разрешённых работах и аккредитации специалистов.',
  },
] as const;

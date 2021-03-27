export const navMenuLinks = [
    { 
        id: 1, 
        title: 'Купить билет', 
        hasDropdown: false
    },
    { 
        id: 2, 
        title: 'Поезда и маршруты', 
        hasDropdown: true,
        dropdownItems: [
            { id: 1, title: 'Скоростные поезда', hasDropdown: false },
            { id: 2, title: 'Фирменные поезда', hasDropdown: false },
            { id: 3, title: 'Дневные поезда', hasDropdown: false },
            { id: 4, title: 'Международные поезда', hasDropdown: false },
            { id: 5, title: 'Мультимодальные перевозки (поезд+автобус)', hasDropdown: false },
            { id: 6, title: 'Туризм с РЖД', hasDropdown: false },
            { id: 7, title: 'Изменения в расписании', hasDropdown: false },
            { id: 8, title: 'Базовое расписание', hasDropdown: false },
            { id: 9, title: 'Фактическое движение поездов', hasDropdown: false },
            { id: 10, title: 'Пригородные поезда', hasDropdown: true, dropdownItems: [
                { id: 1, title: 'Пригородные пассажирские компании', hasDropdown: false },
                { id: 2, title: 'Аэроэкспрессы', hasDropdown: false },
                { id: 3, title: 'Московские центральное кольцо', hasDropdown: false },
                { id: 4, title: 'Московские центральные диаметры', hasDropdown: false },
            ] },
        ] 
     },
    { 
        id: 3, 
        title: 'Тарифы и акции', 
        hasDropdown: true,
        dropdownItems: [
            { id: 1, title: 'Акции', hasDropdown: false},
            { id: 2, title: 'Невозвратные тарифы', hasDropdown: false},
            { id: 3, title: 'Стоимость сервисных услуг', hasDropdown: false},
            { id: 4, title: 'Деловые проездные', hasDropdown: true, dropdownItems: [
                { id: 1, title: 'Сапсан', hasDropdown: false },
                { id: 2, title: 'Стриж', hasDropdown: false },
                { id: 3, title: 'Красная стрела', hasDropdown: false },
                { id: 4, title: 'Ласточка', hasDropdown: false },
                { id: 5, title: 'Москва - Петрозаводск', hasDropdown: false },
            ] },
            { id: 5, title: 'Дорожные и электронные карты', hasDropdown: false },
            { id: 6, title: 'Подарочная карта', hasDropdown: false },
            { id: 7, title: 'Скидки в международном сообщении', hasDropdown: false },
            { id: 8, title: 'Льготы', hasDropdown: false },
            { id: 9, title: 'Динамическое ценообразование', hasDropdown: false },
            { id: 10, title: 'Сезонные изменения тарифов', hasDropdown: false },
        ]
    },
    { 
        id: 4, 
        title: 'Услуги и сервисы', 
        hasDropdown: true,
        dropdownItems: [
            { id: 1, title: 'Маломобильным пассажирам', hasDropdown: true, dropdownItems: [
                { id: 1, title: 'Центр содействия мобильности', hasDropdown: true, dropdownItems: [
                    { id: 1, title: 'Заявка на регистрацию в центре содействия мобильности', hasDropdown: false },
                    { id: 2, title: 'Заявка на сопровождение и оказание помощи', hasDropdown: false },
                    { id: 3, title: 'Заявка на резервирование специализированных мест для инвалидов в поездах дальнего следования', hasDropdown: false },
                ] },
                { id: 2, title: 'Карта доступности вокзалов', hasDropdown: false },
            ] },
            { id: 2, title: 'Питание в поездах', hasDropdown: false },
            { id: 3, title: 'Оформление дополнительных услуг к билетам', hasDropdown: false },
            { id: 4, title: 'Перевозка автомобиля', hasDropdown: false },
            { id: 5, title: 'Перевозка багажа, посылок, животных', hasDropdown: false },
            { id: 6, title: 'Заказ билета по телефону', hasDropdown: false },
            { id: 7, title: 'Проверка билета по номеру', hasDropdown: false },
            { id: 8, title: 'Поиск забытых вещей', hasDropdown: false },
            { id: 9, title: 'Детям', hasDropdown: false },
            { id: 10, title: 'Мобильное приложение "РЖД Пассажирам"', hasDropdown: false },
            { id: 11, title: 'Мультимедийный портал "Попутчик"', hasDropdown: false },
            { id: 12, title: 'On-line табло на вокзалах', hasDropdown: false },
        ]
    },
    { 
        id: 5, 
        title: 'РЖД Бонус', 
        hasDropdown: true,
        dropdownItems: [
            { id: 1, title: 'Сайт программы "РЖД Бонус"', hasDropdown: false },
            { id: 2, title: 'Покупка билетов за баллы', hasDropdown: false },
            { id: 3, title: 'Калькулятор баллов', hasDropdown: false },
            { id: 4, title: 'Обратная связь', hasDropdown: false },
        ] 
    },
    { 
        id: 6, 
        title: 'Правила', 
        hasDropdown: true,
        dropdownItems: [
            { id: 1, title: 'О проезде в Калиниградскую область', hasDropdown: false },
            { id: 2, title: 'Оформление электронных билетов', hasDropdown: false },
            { id: 3, title: 'Возврат билетов', hasDropdown: false },
            { id: 4, title: 'Оферты', hasDropdown: false },
            { id: 5, title: 'Правила перевозок', hasDropdown: false },
            { id: 6, title: 'Безопасность на транспорте', hasDropdown: false },
        ]
    },
    { 
        id: 7, 
        title: 'Информация', 
        hasDropdown: true,
        dropdownItems: [
            { id: 1, title: 'Коронавирус. Информация для наших клиентов', hasDropdown: false },
            { id: 2, title: 'Часто задаваемые вопросы', hasDropdown: false },
            { id: 3, title: 'Время открытия продажи билетов', hasDropdown: false },
            { id: 4, title: 'Кассы и терминалы', hasDropdown: false },
            { id: 5, title: 'Поезда и вагоны', hasDropdown: false },
            { id: 6, title: 'Классы обслуживания', hasDropdown: false },
            { id: 7, title: 'Перевозочные компании', hasDropdown: false },
            { id: 8, title: 'Информация в дорогу', hasDropdown: false },
            { id: 9, title: 'Обратная связь', hasDropdown: false },
            { id: 10, title: 'Новости', hasDropdown: false },
        ] 
    },
    { id: 8, title: 'Карта сайта', hasDropdown: false }
]
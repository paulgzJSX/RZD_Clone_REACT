import discountsImg from '../images/discounts.jpg'
import tourismImg from '../images/train.jpg'
import impairedImg from '../images/mobile.png'

export const pictureCards = [
    {
        id: 1,
        title: 'Акции и скидки',
        image: discountsImg,
        links: [
            { link: '', text: '«Поезд выше - цена ниже»' },
            { link: '', text: '«Сели и поехали»' },
            { link: '', text: 'Скидка в плацкартном вагоне 30%' },
            { link: '', text: 'Путешествуйте в метро со скидкой 50%' },
        ]
    },
    {
        id: 2,
        title: 'Туризм с РЖД',
        image: tourismImg,
        links: [
            { link: '', text: 'Поезд выходного дня в Великий Новгород и Углич' },
            { link: '', text: 'Ретропоезд «Рускеальский экспресс»' },
            { link: '', text: 'Ретропоезд «Селигер»' },
            { link: '', text: 'Ретропоезд «Яхрома»' },
        ]
    },
    {
        id: 3,
        title: 'Маломобильные пассажиры',
        image: impairedImg,
        links: [
            { link: '', text: 'Центр содействия мобильности ОАО «РЖД»' },
            { link: '', text: 'Оформление заявок на услуги' }
        ]
    }
]
import { useTranslation } from 'react-i18next';

import cardImage1 from '../images/1.1.jpg';
import cardImage2 from '../images/2.2.jpg';
import cardImage4 from '../images/4.4.jpg';
// import cardImage5 from '../images/5.5.jpg';
import cardImage6 from '../images/6.6.jpg';
import cardImage7 from '../images/9.9.jpg';
// import cardImage8 from '../images/10.10.jpg';

export interface CardsTypes {
    id: number;
    image: string;
    title: string;
    text: string;
    link: string;
}

export const useTranslatedServicesData = (): CardsTypes[] => {
    const { t } = useTranslation();

    return [
        {
            id: 1,
            image: cardImage1,
            title: 'Pizza delivery',
            text: t('main.projects.pizza'),
            link: '/work/pizza',
        },
        {
            id: 2,
            image: cardImage2,
            title: 'DlNure booking',
            text: t('main.projects.dlnure'),
            link: '/work/dlnure',
        },
        {
            id: 3,
            image: cardImage4,
            title: 'Sneakers',
            text: t('main.projects.sneakers'),
            link: '/work/sneakers',
        },
        // {
        //     id: 4,
        //     image: cardImage5,
        //     title: 'AirPods lending',
        //     text: t('main.projects.airpods'),
        //     link: '/work/airpods',
        // },
        {
            id: 5,
            image: cardImage6,
            title: 'Random password',
            text: t('main.projects.password'),
            link: '/work/password',
        },
        // {
        //     id: 6,
        //     image: cardImage8,
        //     title: 'Abi CRM System',
        //     text: t('main.projects.crm'),
        //     link: '/work/abi-crm',
        // },
        {
            id: 7,
            image: cardImage7,
            title: 'Watch Store',
            text: t('main.projects.watch'),
            link: '/work/watch-store',
        },
    ];
};

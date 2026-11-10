import { useTranslation } from 'react-i18next';

import cardImage1 from '../images/1.1.jpg';
import cardImage3 from '../images/3.3.jpg';
import cardImage4 from '../images/4.4.jpg';
import cardImage5 from '../images/5.5.jpg';
import cardImage6 from '../images/6.6.jpg';
import cardImage8 from '../images/8.8.jpg';
import contrifyCover from '../images/projects/contrify1.jpg';
import trepcoCover from '../images/projects/trepco1.jpg';
import leoaiCover from '../images/projects/leoai1.jpg';
import legalCover from '../images/projects/legal1.jpg';
import spsCover from '../images/projects/sps1.jpg';

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
            image: cardImage5,
            title: 'WorkRadar.EU',
            text: t('main.projects.workradar'),
            link: '/work/workradar',
        },
        {
            id: 10,
            image: trepcoCover,
            title: 'Trepco',
            text: t('main.projects.trepco'),
            link: '/work/trepco',
        },
        {
            id: 11,
            image: leoaiCover,
            title: 'LeoAI',
            text: t('main.projects.leoai'),
            link: '/work/leoai',
        },
        {
            id: 9,
            image: contrifyCover,
            title: 'Contrify',
            text: t('main.projects.contrify'),
            link: '/work/contrify',
        },
        {
            id: 12,
            image: legalCover,
            title: 'Legal Platform',
            text: t('main.projects.legal-platform'),
            link: '/work/legal-platform',
        },

        {
            id: 13,
            image: spsCover,
            title: 'Smart Property Systems',
            text: t('main.projects.sps'),
            link: '/work/sps',
        },
        {
            id: 3,
            image: cardImage3,
            title: 'FC Livyi Bereh',
            text: t('main.projects.fc-lb'),
            link: '/work/fc-livyi-bereh',
        },
        {
            id: 4,
            image: cardImage4,
            title: 'Vadaleos',
            text: t('main.projects.vadaleos'),
            link: '/work/vadaleos',
        },

        {
            id: 5,
            image: cardImage6,
            title: 'BWT Group Logistics',
            text: t('main.projects.bwt'),
            link: '/work/bwt-group-logistics',
        },
        {
            id: 7,
            image: cardImage1,
            title: 'British Hills',
            text: t('main.projects.british-hills'),
            link: '/work/british-hills',
        },
        {
            id: 8,
            image: cardImage8,
            title: 'DAIWO.me',
            text: t('main.projects.daiwo'),
            link: '/work/daiwo',
        },
    ];
};

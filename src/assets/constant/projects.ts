import workradar1 from '../images/projects/workradar1.png';
import workradar2 from '../images/projects/workradar2.png';
import workradar3 from '../images/projects/workradar3.png';
import workradar4 from '../images/projects/workradar4.png';
import workradar5 from '../images/projects/workradar5.png';

import british1 from '../images/projects/british-hills1.png';
import british2 from '../images/projects/british-hills2.png';
import british3 from '../images/projects/british-hills3.png';
import british4 from '../images/projects/british-hills4.png';
import british5 from '../images/projects/british-hills5.png';

import fclb1 from '../images/projects/fc-lb1.png';
import fclb2 from '../images/projects/fc-lb2.png';
import fclb3 from '../images/projects/fc-lb3.png';
import fclb4 from '../images/projects/fc-lb4.png';
import fclb5 from '../images/projects/fc-lb5.png';

import vadaleos1 from '../images/projects/vadaleos1.png';
import vadaleos2 from '../images/projects/vadaleos2.png';
import vadaleos3 from '../images/projects/vadaleos3.png';
import vadaleos4 from '../images/projects/vadaleos4.png';
import vadaleos5 from '../images/projects/vadaleos5.png';

import bwt1 from '../images/projects/bwt1.png';
import bwt2 from '../images/projects/bwt2.png';
import bwt3 from '../images/projects/bwt3.png';
import bwt4 from '../images/projects/bwt4.png';
import bwt5 from '../images/projects/bwt5.png';

import streamout1 from '../images/projects/streamout1.png';
import streamout2 from '../images/projects/streamout2.png';
import streamout3 from '../images/projects/streamout3.png';
import streamout4 from '../images/projects/streamout4.png';
import streamout5 from '../images/projects/streamout5.png';

import daiwo1 from '../images/projects/daiwo1.png';
import daiwo2 from '../images/projects/daiwo2.png';
import daiwo3 from '../images/projects/daiwo3.png';
import daiwo4 from '../images/projects/daiwo4.png';
import daiwo5 from '../images/projects/daiwo5.png';

export interface ProjectsTypes {
    id: string;
    title: string;
    text: string;
    description: string;
    descriptionText: string[];
    link: string;
    images: string[];
    video: string;
}

export const projectsComponents = [
    {
        id: 'workradar',
        title: 'WorkRadar.EU - Job Search Platform',
        images: [workradar1, workradar2, workradar3, workradar4, workradar5],
        link: 'https://workradar.eu/',
    },
    {
        id: 'british-hills',
        title: 'British Hills - English Language School',
        images: [british1, british2, british3, british4, british5],
        link: 'https://british-hills.com.ua/',
    },
    {
        id: 'fc-livyi-bereh',
        title: 'FC Livyi Bereh - Football Club',
        images: [fclb1, fclb2, fclb3, fclb4, fclb5],
        link: 'https://fclb-shop.com/',
    },
    {
        id: 'vadaleos',
        title: 'Vadaleos',
        images: [vadaleos1, vadaleos2, vadaleos3, vadaleos4, vadaleos5],
        link: 'https://vadaleos.cz/',
    },
    {
        id: 'bwt-group-logistics',
        title: 'BWT Group Logistics - Logistics Company',
        images: [bwt1, bwt2, bwt3, bwt4, bwt5],
        link: 'https://bwtgrouplogistics.com/',
    },
    {
        id: 'streamout',
        title: 'StreamOut - Live Streaming Platform',
        images: [streamout1, streamout2, streamout3, streamout4, streamout5],
    },
    {
        id: 'daiwo',
        title: 'DAIWO.me',
        images: [daiwo1, daiwo2, daiwo3, daiwo4, daiwo5],
        link: 'https://daiwo.me',
    },
];

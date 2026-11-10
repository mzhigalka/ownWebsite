import workradar1 from '../images/projects/workradar1.png';
import workradar2 from '../images/projects/workradar2.png';
import workradar3 from '../images/projects/workradar3.png';
import workradar4 from '../images/projects/workradar4.png';
import workradar5 from '../images/projects/workradar5.png';

import trepco1 from '../images/projects/trepco1.jpg';
import trepco2 from '../images/projects/trepco2.jpg';
import trepco3 from '../images/projects/trepco3.jpg';
import trepco4 from '../images/projects/trepco4.jpg';
import trepco5 from '../images/projects/trepco5.jpg';

import leoai1 from '../images/projects/leoai1.jpg';
import leoai2 from '../images/projects/leoai2.jpg';
import leoai3 from '../images/projects/leoai3.jpg';
import leoai4 from '../images/projects/leoai4.jpg';
import leoai5 from '../images/projects/leoai5.jpg';

import legal1 from '../images/projects/legal1.jpg';
import legal2 from '../images/projects/legal2.jpg';
import legal3 from '../images/projects/legal3.jpg';
import legal4 from '../images/projects/legal4.jpg';
import legal5 from '../images/projects/legal5.jpg';

import sps1 from '../images/projects/sps1.jpg';
import sps2 from '../images/projects/sps2.jpg';
import sps3 from '../images/projects/sps3.jpg';
import sps4 from '../images/projects/sps4.jpg';
import sps5 from '../images/projects/sps5.jpg';

import contrify1 from '../images/projects/contrify1.jpg';
import contrify2 from '../images/projects/contrify2.jpg';
import contrify3 from '../images/projects/contrify3.jpg';
import contrify4 from '../images/projects/contrify4.jpg';
import contrify5 from '../images/projects/contrify5.jpg';

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
        id: 'trepco',
        title: 'Trepco - B2B Wholesale Ordering Platform',
        images: [trepco1, trepco2, trepco3, trepco4, trepco5],
    },
    {
        id: 'leoai',
        title: 'LeoAI - AI Employment Law Assistant',
        images: [leoai1, leoai2, leoai3, leoai4, leoai5],
        link: 'https://leohr.ai/',
    },
    {
        id: 'contrify',
        title: 'Contrify - AI-Powered SaaS for Building Cost Control',
        images: [contrify1, contrify2, contrify3, contrify4, contrify5],
    },
    {
        id: 'legal-platform',
        title: 'Legal Platform - AI Legal Memorandum Generator',
        images: [legal1, legal2, legal3, legal4, legal5],
    },
    {
        id: 'sps',
        title: 'Smart Property Systems - Property Management SaaS with AI Assistant',
        images: [sps1, sps2, sps3, sps4, sps5],
        link: 'https://smartpropertysystems.com/',
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
        id: 'daiwo',
        title: 'DAIWO.me',
        images: [daiwo1, daiwo2, daiwo3, daiwo4, daiwo5],
        link: 'https://daiwo.me',
    },
];

// Ordered from the most recent entry to the oldest one.

export interface DegreeTypes {
    id: string;
    /** i18n key of the degree name, e.g. `about.education.master`. */
    degreeKey: string;
    /** i18n key of the faculty / specialisation line. */
    fieldKey: string;
    years: string;
}

export interface CourseTypes {
    id: string;
    provider: string;
    title: string;
    certificateUrl: string;
    /** i18n key of the date line. */
    dateKey: string;
}

export const degrees: DegreeTypes[] = [
    {
        id: 'nure-master',
        degreeKey: 'about.education.master',
        fieldKey: 'about.education.masterField',
        years: '2026 - 2028',
    },
    {
        id: 'nure-bachelor',
        degreeKey: 'about.education.bachelor',
        fieldKey: 'about.education.faculty',
        years: '2021 - 2025',
    },
];

export const courses: CourseTypes[] = [
    {
        id: 'hubspot-service-hub',
        provider: 'HubSpot Academy',
        title: 'Service Hub Software',
        certificateUrl:
            'https://app-eu1.hubspot.com/academy/achievements/cnywfg0w/en/1/matvii-zhyhalka/service-hub-software-certified',
        dateKey: 'about.education.date6',
    },
    {
        id: 'hubspot-data-integrations',
        provider: 'HubSpot Academy',
        title: 'HubSpot Data Integrations',
        certificateUrl:
            'https://app-eu1.hubspot.com/academy/achievements/j2vk9v5r/en/1/matvii-zhyhalka/hubspot-data-integrations-certified',
        dateKey: 'about.education.date6',
    },
    {
        id: 'hubspot-integrating-foundations',
        provider: 'HubSpot Academy',
        title: 'Integrating With HubSpot I: Foundations',
        certificateUrl:
            'https://app-eu1.hubspot.com/academy/achievements/6lx0mg96/en/1/matvii-zhyhalka/integrating-with-hubspot-i-foundations-certified',
        dateKey: 'about.education.date6',
    },
    {
        id: 'alberta-design-patterns',
        provider: 'University of Alberta',
        title: 'Design Patterns',
        certificateUrl: 'https://www.coursera.org/account/accomplishments/records/H3EYU7HGPP3V',
        dateKey: 'about.education.date7',
    },
    {
        id: 'udemy-frontend',
        provider: 'Udemy',
        title: 'Frontend developer in HTML, CSS and JavaScript',
        certificateUrl:
            'https://www.udemy.com/certificate/UC-bd8b854c-edad-4471-ad4c-0dd3a69bf13e/',
        dateKey: 'about.education.date1',
    },
    {
        id: 'meta-react-advanced',
        provider: 'Meta',
        title: 'React Advanced',
        certificateUrl:
            'https://www.coursera.org/account/accomplishments/verify/H4UDCCXCXAXR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
        dateKey: 'about.education.date3',
    },
    {
        id: 'meta-react-basics',
        provider: 'Meta',
        title: 'React Basics',
        certificateUrl:
            'https://www.coursera.org/account/accomplishments/verify/SNQTTXQLJEUN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course',
        dateKey: 'about.education.date2',
    },
    {
        id: 'ucsd-java-oop',
        provider: 'UC San Diego',
        title: 'Object Oriented Programming in Java',
        certificateUrl: 'https://coursera.org/share/4be8a9d94f3b6a6c55956ef454a5ef27',
        dateKey: 'about.education.date4',
    },
    {
        id: 'learnquest-java-class-library',
        provider: 'LearnQuest',
        title: 'Java Class Library',
        certificateUrl: 'https://coursera.org/share/a686f1e75b2cf59b8ac36c287d81b269',
        dateKey: 'about.education.date5',
    },
];

import { FC } from 'react';
import { TFunction } from 'i18next';

interface EducationSectionProps {
    t: TFunction;
}

const EducationSection: FC<EducationSectionProps> = ({ t }) => {
    return (
        <>
            <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
                {t('about.education.title')}
            </h3>
            <div className="mb-[80px] flex flex-col gap-y-[20px]">
                <div>
                    <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                        {t('about.education.nure')}
                    </p>
                    <p className="text-[18px] text-semigrey font-light max-md:font-normal">
                        {t('about.education.faculty')}
                    </p>
                    <p className="text-[16px] text-grey font-light max-md:font-normal">
                        2021 - 2025
                    </p>
                </div>
                <div>
                    <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                        {t('about.education.course')} Udemy “Frontend developer in HTML, CSS and
                        JavaScript”
                    </p>
                    <a
                        href="https://www.udemy.com/certificate/UC-bd8b854c-edad-4471-ad4c-0dd3a69bf13e/"
                        className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                        target="___blank"
                    >
                        {t('about.education.certificate')}
                    </a>
                    <p className="text-[16px] text-grey font-light max-md:font-normal">
                        {t('about.education.date1')}
                    </p>
                </div>
                <div>
                    <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                        {t('about.education.course')} Meta “React Basics”
                    </p>
                    <a
                        href="https://www.coursera.org/account/accomplishments/verify/SNQTTXQLJEUN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
                        className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                        target="__blank"
                    >
                        {t('about.education.certificate')}
                    </a>
                    <p className="text-[16px] text-grey font-light max-md:font-normal">
                        {t('about.education.date2')}
                    </p>
                </div>
                <div>
                    <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                        {t('about.education.course')} Meta “React Advanced”
                    </p>
                    <a
                        href="https://www.coursera.org/account/accomplishments/verify/H4UDCCXCXAXR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                        className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                        target="__blank"
                    >
                        {t('about.education.certificate')}
                    </a>
                    <p className="text-[16px] text-grey font-light max-md:font-normal">
                        {t('about.education.date3')}
                    </p>
                </div>
                <div>
                    <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                        {t('about.education.course')} UC San Diego "Object Oriented Programming in
                        Java"
                    </p>
                    <a
                        href="https://coursera.org/share/4be8a9d94f3b6a6c55956ef454a5ef27"
                        className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                        target="__blank"
                    >
                        {t('about.education.certificate')}
                    </a>
                    <p className="text-[16px] text-grey font-light max-md:font-normal">
                        {t('about.education.date4')}
                    </p>
                </div>
                <div>
                    <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                        {t('about.education.course')} LearnQuest "Java Class Library"
                    </p>
                    <a
                        href="https://coursera.org/share/a686f1e75b2cf59b8ac36c287d81b269"
                        className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                        target="__blank"
                    >
                        {t('about.education.certificate')}
                    </a>
                    <p className="text-[16px] text-grey font-light max-md:font-normal">
                        {t('about.education.date5')}
                    </p>
                </div>
            </div>
        </>
    );
};

export default EducationSection;

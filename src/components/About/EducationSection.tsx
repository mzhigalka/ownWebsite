import { FC } from 'react';
import { TFunction } from 'i18next';
import { courses, degrees } from '../../assets/constant/education';

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
                {degrees.map((degree) => (
                    <div key={degree.id}>
                        <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                            {t('about.education.nure')}
                        </p>
                        <p className="text-[18px] text-semigrey font-light max-md:font-normal">
                            {t(degree.degreeKey)} — {t(degree.fieldKey)}
                        </p>
                        <p className="text-[16px] text-grey font-light max-md:font-normal">
                            {degree.years}
                        </p>
                    </div>
                ))}

                {courses.map((course) => (
                    <div key={course.id}>
                        <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                            {t('about.education.course')} {course.provider} “{course.title}”
                        </p>
                        <a
                            href={course.certificateUrl}
                            className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('about.education.certificate')}
                        </a>
                        <p className="text-[16px] text-grey font-light max-md:font-normal">
                            {t(course.dateKey)}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default EducationSection;

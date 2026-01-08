import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { sectionVariants } from '../assets/constant/animation';

import ExperienceSection from '../components/About/ExperienceSection';
import EducationSection from '../components/About/EducationSection';
import ContactsSection from '../components/About/ContactsSection';
import SkillsSection from '../components/About/SkillsSection';
import MainSection from '../components/About/MainSection';
import Seo from '../components/Seo';

const SectionWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={sectionVariants}
        >
            {children}
        </motion.div>
    );
};

const About: FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Seo title={t('meta.aboutTitle')} description={t('meta.aboutDescription')} />
            <SectionWrapper>
                <MainSection t={t} />
            </SectionWrapper>
            <div className="max-w-[760px] mx-auto">
                <SectionWrapper>
                    <ExperienceSection t={t} />
                </SectionWrapper>
                <SectionWrapper>
                    <EducationSection t={t} />
                </SectionWrapper>
                <SectionWrapper>
                    <SkillsSection t={t} />
                </SectionWrapper>
                <SectionWrapper>
                    <ContactsSection t={t} />
                </SectionWrapper>
            </div>
        </>
    );
};

export default About;

import { FC } from "react";
import { useTranslation } from "react-i18next";

import ExperienceSection from "../components/About/ExperienceSection";
import EducationSection from "../components/About/EducationSection";
import ContactsSection from "../components/About/ContactsSection";
import SkillsSection from "../components/About/SkillsSection";
import MainSection from "../components/About/MainSection";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MainSection t={t} />
      <div className="max-w-[760px] mx-auto">
        <ExperienceSection t={t} />
        <EducationSection t={t} />
        <SkillsSection t={t} />
        <ContactsSection t={t} />
      </div>
    </>
  );
};

export default About;

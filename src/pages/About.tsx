import { FC } from "react";

import ExperienceSection from "../components/About/ExperienceSection";
import EducationSection from "../components/About/EducationSection";
import ContactsSection from "../components/About/ContactsSection";
import SkillsSection from "../components/About/SkillsSection";
import MainSection from "../components/About/MainSection";

const About: FC = () => {
  return (
    <>
      <MainSection />
      <div className="max-w-[760px] mx-auto">
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactsSection />
      </div>
    </>
  );
};

export default About;

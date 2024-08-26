import { TFunction } from "i18next";
import { FC } from "react";

interface SkillsSectionProps {
  t: TFunction;
}

const SkillsSection: FC<SkillsSectionProps> = ({ t }) => {
  return (
    <>
      <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
        {t("about.skills.title")}
      </h3>
      <div className="grid grid-cols-2 text-[22px] text-semigrey font-light leading-[35px] mb-[80px] max-md:grid-cols-1 max-md:text-lg max-md:font-normal">
        <p>HTML</p>
        <p>CSS / SCSS / SASS / LESS</p>
        <p>React JS</p>
        <p>Git / GitHub / GitLab</p>
        <p>JavaScript</p>
        <p>Tailwind CSS</p>
        <p>TypeScript</p>
        <p>Figma</p>
        <p>Redux Toolkit</p>
        <p>Vite</p>
      </div>
    </>
  );
};

export default SkillsSection;

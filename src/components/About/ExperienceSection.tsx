import { FC } from "react";
import { workExperiences } from "../../assets/constant/workExperiences";
import { TFunction } from "i18next";

interface ExperienceSectionProps {
  t: TFunction;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ t }) => {
  return (
    <>
      <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
        {t("about.experience.title")}
      </h3>
      <div className="mb-[80px]">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          {workExperiences.map((item) => (
            <div key={item.id} className="mb-[20px] ">
              <p className="text-[22px] text-black max-md:font-medium">
                {item.position}
              </p>
              <p className="text-lg text-semigrey font-light max-md:font-normal">
                {item.company}
              </p>
              <p className="text-base text-grey font-light mb-3 max-md:font-normal">
                {t(`about.experience.date${item.id}`)}
              </p>
              <p className="text-lg text-semigrey font-light max-md:font-normal">
                {t(`about.experience.role${item.id}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;

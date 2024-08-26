import { FC } from "react";
import { TFunction } from "i18next";
import myPhoto from "../../assets/images/my-photo1.jpg";

interface MainSectionProps {
  t: TFunction;
}

const MainSection: FC<MainSectionProps> = ({ t }) => {
  return (
    <div>
      <div className="max-w-[760px] mx-auto">
        <h1 className="mb-[40px] mt-[60px] font-medium text-[44px] leading-[53px] text-black max-md:text-3xl max-md:font-semibold max-md:mt-[120px]">
          {t("about.main.title")}
        </h1>
        <div className="flex flex-col gap-[40px] font-light text-[22px] text-semigrey leading-[35px] max-md:text-lg max-md:font-normal">
          <p>{t("about.main.text1")}</p>
          <p>{t("about.main.text2")}</p>
          <p>{t("about.main.text3")}</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-[100px] mt-20">
        <img
          src={myPhoto}
          alt="my-photo"
          className="max-md:object-cover max-md:w-full max-md:block max-md:h-[360px]"
        />
      </div>
    </div>
  );
};

export default MainSection;

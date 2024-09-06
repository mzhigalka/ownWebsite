import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { mainTitleVariants } from "../assets/constant/animation";

import Card from "./Card";
import CopyMail from "./CopyMail";

const Main: FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="pt-32 pb-36 max-md:pb-20">
        <motion.h1
          className="text-7xl font-semibold leading-[86px] text-black max-md:text-[35px] max-md:leading-[45px]"
          initial="hidden"
          animate="visible"
          variants={mainTitleVariants}
        >
          {t("main.title")}
          {/* Expert
          in HTML/CSS and Modern JavaScript. */}
        </motion.h1>
      </div>
      <Card />
      <div className="py-40 max-w-[760px] mx-auto ">
        <p className="max-w-3xl font-light leading-[35px] text-[22px] text-semigrey pb-[30px] max-md:text-lg ">
          {t("main.about")}
        </p>
        <Link
          className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer mb-[190px] max-md:text-lg"
          to="/about"
        >
          {t("main.more")}
        </Link>
        <CopyMail />
      </div>
    </main>
  );
};

export default Main;

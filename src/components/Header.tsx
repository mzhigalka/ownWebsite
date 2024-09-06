import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { headerVariants } from "../assets/constant/animation";

const Header: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <motion.header
      className="py-8 sticky top-0 bg-white z-10 opacity-100 max-md:py-5"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Link
              to="/"
              className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg"
            >
              {t("header.me")}
            </Link>
          </li>
          <div className="flex gap-10 items-center max-[423px]:gap-4">
            <li>
              <Link
                to={isHomePage ? "/about" : "/"}
                className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg"
              >
                {isHomePage ? t("header.about") : t("header.work")}
              </Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </div>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;

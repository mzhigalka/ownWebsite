import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="py-8 sticky top-0 bg-white z-10 opacity-90 max-md:py-5">
      <nav>
        <ul className="flex justify-between items-center">
          <Link to="/">
            <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg">
              {t("header.me")}
            </li>
          </Link>
          <div className="flex gap-10 items-center">
            <Link to={isHomePage ? "/about" : "/"}>
              <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg">
                {isHomePage ? t("header.about") : t("header.work")}
              </li>
            </Link>
            <LanguageSwitcher />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

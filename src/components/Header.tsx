import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="py-10 sticky top-0 bg-white z-10 opacity-90 max-md:py-5">
      <nav>
        <ul className="flex justify-between">
          <Link to="/">
            <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg">
              Matvey Zhigalka
            </li>
          </Link>
          <Link to={isHomePage ? "/about" : "/"}>
            <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer max-md:text-lg">
              {isHomePage ? "About" : "Work"}
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

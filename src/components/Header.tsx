import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="py-10 sticky top-0 bg-white z-10 opacity-90">
      <ul className="flex justify-between">
        <Link to="/">
          <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer">
            Matvey Zhigalka
          </li>
        </Link>
        <Link to="/about">
          <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer">
            About
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;

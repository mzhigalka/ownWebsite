import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="py-10 sticky top-0 bg-white z-10 opacity-90">
      <ul className="flex justify-between">
        <a href="/home">
          <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer">
            Matvey Zhigalka
          </li>
        </a>
        <a href="/about">
          <li className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer">
            About
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Header;

import { FC } from "react"

const Header: FC = () => {
  return (
    <header className="py-10">
      <ul className="flex justify-between">
        <a>
          <li
            className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer">
            Matvey Zhigalka
          </li>
        </a>
        <a>
          <li
            className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer">
            About
          </li>
        </a>
      </ul>
    </header>
  )
}

export default Header
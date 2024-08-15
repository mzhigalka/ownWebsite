import React, { FC } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import CopyMail from "./CopyMail";

const Main: FC = () => {
  return (
    <main>
      <div className="pt-32 pb-36 max-md:pb-20">
        <h1 className="text-7xl font-semibold leading-[86px] text-black max-md:text-[35px] max-md:leading-[45px]">
          Transforming Designs into Code. React & TypeScript Developer.
          {/* Expert
          in HTML/CSS and Modern JavaScript. */}
        </h1>
      </div>
      <Card />
      <div className="py-40 max-w-[760px] mx-auto ">
        <p className="max-w-3xl font-light leading-[35px] text-[22px] text-semigrey pb-[30px] max-md:text-lg ">
          I’m Matvey, a Front-End Developer specializing in React and
          TypeScript, based in Ukraine. With over 4 years of non-commercial
          experience and more than 6 months of commercial work, I excel at
          creating dynamic and engaging web experiences. My expertise includes
          crafting intuitive user interfaces, optimizing performance, and
          delivering high-quality code.
        </p>
        <Link
          className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer mb-[190px] max-md:text-lg"
          to="/about"
        >
          More about me
        </Link>
        <CopyMail />
      </div>
    </main>
  );
};

export default Main;

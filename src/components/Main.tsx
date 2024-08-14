import React, { FC } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import CopyMail from "./CopyMail";

const Main: FC = () => {
  return (
    <main>
      <div className="pt-32 pb-36 max-md:pb-20">
        <h1 className="text-7xl font-semibold leading-[86px] text-black max-md:text-[35px] max-md:leading-[45px]">
          Product Design. InterFfaces. Systems. Strategy. UX. & More
        </h1>
      </div>
      <Card />
      <div className="py-40 max-w-[760px] mx-auto ">
        <p className="max-w-3xl font-light leading-[35px] text-[22px] text-semigrey pb-[30px] max-md:text-lg ">
          I’m Matvey, a product designer based in Ukraine with over 12 years of
          diverse experience. I specialize in crafting product interfaces,
          aligning business objectives with user needs, and overseeing
          comprehensive design projects. My passion lies in tackling diverse
          challenges in the dynamic design landscape.
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

import { FC } from "react";
import CopyMail from "./CopyMail";

const Main: FC = () => {
  return (
    <div>
      {/* <div>Card</div> */}
      <div className="py-40 max-w-[760px] mx-auto ">
        <p className="max-w-3xl font-light leading-[35px] text-[22px] text-semigrey pb-[30px]  ">
          I’m Matvey, a product designer based in Ukraine with over 12 years of
          diverse experience. I specialize in crafting product interfaces,
          aligning business objectives with user needs, and overseeing
          comprehensive design projects. My passion lies in tackling diverse
          challenges in the dynamic design landscape.
        </p>
        <a
          className="text-black font-medium text-[22px] hover:underline hover:cursor-pointer mb-[190px]"
          href="/about"
        >
          More about me
        </a>
        <CopyMail />
      </div>
    </div>
  );
};

export default Main;

import { FC } from "react";
import myPhoto from "../../assets/images/my-photo1.jpg";

const MainSection: FC = () => {
  return (
    <div>
      <div className="max-w-[760px] mx-auto">
        <h1 className="mb-[40px] mt-[60px] font-medium text-[44px] leading-[53px] text-black max-md:text-3xl max-md:font-semibold max-md:mt-[120px]">
          Frontend Developer specializing in the creation of high-quality
          websites and innovative user interfaces.
        </h1>
        <div className="flex flex-col gap-[40px] font-light text-[22px] text-semigrey leading-[35px] max-md:text-lg max-md:font-normal">
          <p>
            I'm Matvey, a Front-End Developer with a deep-rooted passion for web
            development that began in high school. My journey started in 10th
            grade, where I first explored front-end development through HTML and
            CSS. By 11th grade, I had a solid grasp of these technologies and
            decided to pursue Computer Engineering at Kharkiv National
            University of Radio Electronics.
          </p>
          <p>
            During my university studies, I delved into key programming
            principles, including OOP and algorithms, and took various courses
            that expanded my knowledge of front-end development. I became
            proficient in JavaScript and familiarized myself with Git and
            version control systems, ultimately choosing React JS for further
            specialization. Currently, I am enhancing my skills in TypeScript
            and Redux Toolkit.
          </p>
          <p>
            I've gained hands-on experience through an internship at HARBOUR
            TECH ABI CRM LTD, working on a CRM system project tailored for the
            Spanish market. Additionally, I am employed part-time at Artic Web,
            where I contribute to the development of diverse web applications
            for various clients. With over 6 months of commercial experience and
            approximately 4 years of non-commercial work, I am committed to
            creating innovative and effective web solutions that meet both user
            needs and business objectives.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-[100px] mt-20">
        <img
          src={myPhoto}
          alt="my-photo"
          className="max-md:object-cover max-md:w-full max-md:block max-md:h-[360px]"
        />
      </div>
    </div>
  );
};

export default MainSection;

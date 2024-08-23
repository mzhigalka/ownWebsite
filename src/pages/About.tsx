import { FC } from "react";
import myPhoto from "../assets/images/my-photo1.jpg";
import { workExperiences } from "../assets/constant/workExperiences";

const About: FC = () => {
  return (
    <>
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

      <div className="max-w-[760px] mx-auto">
        <div>
          <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
            Work Experiences
          </h3>
          <div className="mb-[80px]">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
              {workExperiences.map((item) => (
                <div key={item.id} className="mb-[20px] ">
                  <p className="text-[22px] text-black max-md:font-medium">
                    {item.position}
                  </p>
                  <p className="text-lg text-semigrey font-light max-md:font-normal">
                    {item.company}
                  </p>
                  <p className="text-base text-grey font-light mb-3 max-md:font-normal">
                    {item.date}
                  </p>
                  <p className="text-base text-semigrey font-light max-md:font-normal">
                    My Role: {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
            Education
          </h3>
          <div className="mb-[80px] flex flex-col gap-y-[20px]">
            <div>
              <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                Kharkiv National University of Radio Electronics
              </p>
              <p className="text-[18px] text-semigrey font-light max-md:font-normal">
                Faculty of computer engineering and management, specialty -
                computer engineering
              </p>
              <p className="text-[16px] text-grey font-light max-md:font-normal">
                2021 - 2025
              </p>
            </div>
            <div>
              <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                Course Udemy “Frontend developer in HTML, CSS and JavaScript”
              </p>
              <a
                href="https://www.udemy.com/certificate/UC-bd8b854c-edad-4471-ad4c-0dd3a69bf13e/"
                className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                target="_blank"
              >
                Certificate
              </a>
              <p className="text-[16px] text-grey font-light max-md:font-normal">
                Sept. 2022 - Mar. 2024
              </p>
            </div>
            <div>
              <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                Course Meta “React Basics”
              </p>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/SNQTTXQLJEUN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
                className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                target="_blank"
              >
                Certificate
              </a>
              <p className="text-[16px] text-grey font-light max-md:font-normal">
                Sept. 2023 - Oct. 2023
              </p>
            </div>
            <div>
              <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                Course Meta “React Advanced”
              </p>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/H4UDCCXCXAXR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                target="_blank"
              >
                Certificate
              </a>
              <p className="text-[16px] text-grey font-light max-md:font-normal">
                Nov. 2023 - Dec. 2023
              </p>
            </div>
            <div>
              <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                Course UC San Diego "Object Oriented Programming in Java"
              </p>
              <a
                href="https://coursera.org/share/4be8a9d94f3b6a6c55956ef454a5ef27"
                className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                target="_blank"
              >
                Certificate
              </a>
              <p className="text-[16px] text-grey font-light max-md:font-normal">
                Jan. 2023 - Nov. 2023
              </p>
            </div>
            <div>
              <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
                Course LearnQuest "Java Class Library"
              </p>
              <a
                href="https://coursera.org/share/a686f1e75b2cf59b8ac36c287d81b269"
                className="text-[18px] hover:underline cursor-pointer text-semigrey font-light max-md:font-normal"
                target="_blank"
              >
                Certificate
              </a>
              <p className="text-[16px] text-grey font-light max-md:font-normal">
                Feb. 2023 - Feb. 2023
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
            Skills
          </h3>
          <div className="grid grid-cols-2 text-[22px] text-semigrey font-light leading-[35px] mb-[80px] max-md:grid-cols-1 max-md:text-lg max-md:font-normal">
            <p>HTML</p>
            <p>CSS / SCSS / SASS / LESS</p>
            <p>React JS</p>
            <p>Git / GitHub / GitLab</p>
            <p>JavaScript</p>
            <p>Tailwind CSS</p>
            <p>TypeScript</p>
            <p>Figma</p>
            <p>Redux Toolkit</p>
            <p>Vite</p>
          </div>
        </div>
        <div>
          <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
            Contacts
          </h3>
          <div className=" text-[22px] text-semigrey font-light leading-[35px]">
            <p className="mb-[40px] max-md:font-normal max-md:text-lg">
              Feel free to reach out for projects, collaborations, or just to
              say hello! Currently seeking new opportunities.
            </p>
            <div className="flex flex-col font-normal text-black mb-[160px] max-md:text-xl max-md:font-medium">
              <a className="hover:underline" href="mailto:mzhigalka@gmail.com">
                mzhigalka@gmail.com
              </a>
              <a
                className="hover:underline"
                href="https://t.me/mzglk"
                target="_blank"
              >
                Telegram
              </a>
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%82%D0%B2%D1%96%D0%B9-%D0%B6%D0%B8%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-83b847299/"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                className="hover:underline"
                href="https://github.com/mzhigalka"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="hover:underline"
                href="https://gitlab.com/mzhigalka"
                target="_blank"
              >
                GitLab
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

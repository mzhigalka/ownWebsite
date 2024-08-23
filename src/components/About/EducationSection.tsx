import { FC } from "react";

const EducationSection: FC = () => {
  return (
    <>
      <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
        Education
      </h3>
      <div className="mb-[80px] flex flex-col gap-y-[20px]">
        <div>
          <p className="text-[22px] text-black max-md:text-lg max-md:font-medium">
            Kharkiv National University of Radio Electronics
          </p>
          <p className="text-[18px] text-semigrey font-light max-md:font-normal">
            Faculty of computer engineering and management, specialty - computer
            engineering
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
    </>
  );
};

export default EducationSection;

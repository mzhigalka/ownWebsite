import { FC } from "react";

const About: FC = () => {
  return (
    <div className="max-w-[760px] mx-auto">
      <h1 className="mb-[40px] mt-[60px] font-medium text-[44px] leading-[53px] text-black">
        Senior Product Designer specializing in user-centric innovation and
        product evolution.
      </h1>
      <div className="flex flex-col gap-[40px] font-light text-[22px] text-semigrey leading-[35px]">
        <p>
          I'm Matvey, a seasoned Senior Product Designer with over 10 years of
          experience in dynamic startup environments. Throughout my career, I've
          led end-to-end design projects, specializing in optimizing user
          experiences and driving product evolution. I thrive in
          problem-solving, prioritizing user-centric needs, and delivering
          high-quality designs that elevate user satisfaction.
        </p>
        <p>...</p>
        <p>...</p>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 mb-[100px]">
        <img src="" alt="photo-matvey" />
      </div>
      <div>
        <h3 className="text-[32px] font-medium text-black mb-[20px]">
          Work Experiences
        </h3>
        <div className="mb-[80px]">
          <div className="grid grid-cols-2">
            <div className="mb-[20px]">
              <p>Senior Product Designer</p>
              <p>@hotel</p>
              <p>2021 - 2024</p>
            </div>
            <div className="mb-[20px]">
              <p>Senior Product Designer</p>
              <p>@hotel</p>
              <p>2021 - 2024</p>
            </div>
            <div className="mb-[20px]">
              <p>Senior Product Designer</p>
              <p>@hotel</p>
              <p>2021 - 2024</p>
            </div>
            <div className="mb-[20px]">
              <p>Senior Product Designer</p>
              <p>@hotel</p>
              <p>2021 - 2024</p>
            </div>
            <div>
              <p>Senior Product Designer</p>
              <p>@hotel</p>
              <p>2021 - 2024</p>
            </div>
            <div>
              <p>Senior Product Designer</p>
              <p>@hotel</p>
              <p>2021 - 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[32px] font-medium text-black mb-[20px]">
          Education
        </h3>
        <div className="mb-[80px] flex flex-col gap-y-[20px]">
          <div>
            <p className="text-[22px] text-black">Master’s degree</p>
            <p className="text-[18px] text-semigrey font-light">
              Communication and Media Studies Faculty of Electrical Engineering
              and Computer Science
            </p>
            <p className="text-[16px] text-grey font-light">2011 - 2013</p>
          </div>
          <div>
            <p className="text-[22px] text-black">Bachelor of Engineering</p>
            <p className="text-[18px] text-semigrey font-light">
              Communication and Media Studies Faculty of Electrical Engineering
              and Computer Science
            </p>
            <p className="text-[16px] text-grey font-light">2008 – 2011</p>
          </div>
          <div>
            <p className="text-[22px] text-black">High School</p>
            <p className="text-[18px] text-semigrey font-light">
              Digital Communication and Media/Multimedia at School For Design
            </p>
            <p className="text-[16px] text-grey font-light">2004 – 2008</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[32px] font-medium text-black mb-[20px] ">
          Disciplines
        </h3>
        <div className="grid grid-cols-2 text-[22px] text-semigrey font-light leading-[35px] mb-[80px]">
          <p>End-to-end Product Design</p>
          <p>User Experience Design</p>
          <p>Motion Design</p>
          <p>Consulting</p>
          <p>Interface Design</p>
          <p>Design Systems</p>
          <p>Interaction Design</p>
          <p>Front-End</p>
        </div>
      </div>
      <div>
        <h3 className="text-[32px] font-medium text-black mb-[20px]">
          Contacts
        </h3>
        <div className=" text-[22px] text-semigrey font-light leading-[35px]">
          <p className="mb-[40px]">
            Feel free to reach out for projects, collaborations, or just to say
            hello! Currently seeking new opportunities.
          </p>
          <div className="flex flex-col font-normal text-black mb-[160px]">
            <a className="hover:underline" href="mailto:mzhigalka@gmail.com">
              mzhigalka@gmail.com
            </a>
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%82%D0%B2%D1%96%D0%B9-%D0%B6%D0%B8%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-83b847299/"
            >
              Linkedin
            </a>
            <a className="hover:underline" href="https://github.com/mzhigalka">
              GitHub
            </a>
            <a className="hover:underline" href="https://gitlab.com/mzhigalka">
              GitLab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

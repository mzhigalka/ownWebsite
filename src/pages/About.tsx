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
        <p>
          In previous roles, I've spearheaded strategic initiatives that
          significantly enhanced product metrics and user engagement. I excel in
          guiding comprehensive design projects, from strategic planning and
          user research to UI/UX design and seamless collaboration across teams.
          With a strong foundation in methodical design thinking and usability
          principles, I leverage diverse design tools and methodologies to
          achieve impactful outcomes.
        </p>
        <p>
          My expertise lies in developing intuitive product user interfaces and
          fostering collaborative environments that integrate design,
          engineering, and product management. I am dedicated to pushing
          boundaries and delivering innovative solutions that align with user
          expectations and achieve business goals.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 mb-[100px]">
        <img src="" alt="photo-matvey" />
      </div>
      <div>
        <h3 className="text-[32px] font-medium text-black mb-[20px]">
          Work Experiences
        </h3>
        <div className="mb-[80px]"></div>
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
    </div>
  );
};

export default About;

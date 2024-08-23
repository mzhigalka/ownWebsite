import { FC } from "react";

const ContactsSection: FC = () => {
  return (
    <>
      <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
        Contacts
      </h3>
      <div className=" text-[22px] text-semigrey font-light leading-[35px]">
        <p className="mb-[40px] max-md:font-normal max-md:text-lg">
          Feel free to reach out for projects, collaborations, or just to say
          hello! Currently seeking new opportunities.
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
    </>
  );
};
export default ContactsSection;

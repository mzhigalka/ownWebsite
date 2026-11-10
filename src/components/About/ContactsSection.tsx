import { FC } from "react";
import { TFunction } from "i18next";

interface ContactsSectionProps {
  t: TFunction;
}

const ContactsSection: FC<ContactsSectionProps> = ({ t }) => {
  return (
    <>
      <h3 className="text-[32px] font-medium text-black mb-[20px] max-md:text-2xl max-md:font-semibold">
        {t("about.contacts.title")}
      </h3>
      <div className=" text-[22px] text-semigrey font-light leading-[35px]">
        <p className="mb-[40px] max-md:font-normal max-md:text-lg">
          {t("about.contacts.text")}
        </p>
        <div className="flex flex-col font-normal text-black mb-[160px] max-md:text-xl max-md:font-medium">
          <a className="hover:underline" href="mailto:mzhigalka@gmail.com">
            mzhigalka@gmail.com
          </a>
          <a
            className="hover:underline"
            href="https://t.me/mzglk"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/mzhigalka/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            className="hover:underline"
            href="https://github.com/mzhigalka"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:underline"
            href="https://gitlab.com/mzhigalka"
            target="_blank"
            rel="noreferrer"
          >
            GitLab
          </a>
        </div>
      </div>
    </>
  );
};
export default ContactsSection;

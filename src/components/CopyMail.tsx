import React, { FC } from "react";

const CopyMail: FC = () => {
  const [isEmailCopy, setIsEmailCopy] = React.useState<boolean>(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("mzhigalka@gmail.com").then(() => {
      setIsEmailCopy(true);

      setTimeout(() => {
        setIsEmailCopy(false);
      }, 1500);
    });
  };

  return (
    <div className="mt-[190px]">
      <p className="text-[22px] text-semigrey max-md:text-lg font-light">
        Get in touch <span className="text-grey">(Click to copy)</span>
      </p>
      <div
        className="cursor-pointer text-[56px] font-semibold text-black hover:scale-105 ease-out duration-300 max-md:text-2xl"
        onClick={handleEmailCopy}
      >
        {isEmailCopy ? "Email Copied" : "mzhigalka@gmail.com"}
      </div>
    </div>
  );
};

export default CopyMail;

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const CopyMail: FC = () => {
    const [isEmailCopy, setIsEmailCopy] = React.useState<boolean>(false);
    const { t } = useTranslation();

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('mzhigalka@gmail.com').then(() => {
            setIsEmailCopy(true);

            setTimeout(() => {
                setIsEmailCopy(false);
            }, 1500);
        });
    };

    return (
        <div className="mt-[190px]">
            <p className="text-[22px] text-semigrey max-md:text-lg font-light">
                {t('main.touch')} <span className="text-grey">{t('main.click')}</span>
            </p>
            <div
                className="cursor-pointer text-[56px] font-semibold text-black hover:scale-105 ease-out duration-300 max-md:text-2xl"
                onClick={handleEmailCopy}
            >
                {isEmailCopy ? t('main.mail') : 'mzhigalka@gmail.com'}
            </div>
        </div>
    );
};

export default CopyMail;

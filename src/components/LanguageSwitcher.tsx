import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button
                className={`text-[20px] max-md:text-lg hover:underline ${
                    currentLanguage === 'en' ? ' font-semibold' : ''
                }`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <span className="text-[20px] font-medium max-md:text-lg"> / </span>
            <button
                className={`text-[20px] max-md:text-lg hover:underline ${
                    currentLanguage === 'ua' ? ' font-semibold' : ''
                }`}
                onClick={() => changeLanguage('ua')}
            >
                UA
            </button>
        </div>
    );
};

export default LanguageSwitcher;

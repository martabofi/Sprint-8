import { useTranslation } from "react-i18next";
import catFlag from "../assets/cat-flag.png"
import espFlag from "../assets/esp-flag.png";
import enFlag from "../assets/en-flag.png"

type Locales = {
    [key: string]: {
      flag: string;
      title: string;
    };
  };

const locales: Locales = {
  cat: {flag: catFlag, title: "Català"},
  esp: {flag: espFlag, title: "Castellà"},
  en: {flag: enFlag, title: "English"}
}

const Translation: React.FC = () => {
    const { i18n } = useTranslation();
    return (
        <div className='flex gap-2 justify-end my-2'>           
            {Object.keys(locales).map((locale) => (
                <div key={locale} className="w-9">
                    <button type="submit" onClick={() => i18n.changeLanguage(locale)}>
                        <img src={locales[locale].flag} alt={locales[locale].title} />
                    </button>
                </div>
            ))}            
        </div>
    );
};

export default Translation;
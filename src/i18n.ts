import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './locales/en/translation.json'
import translationCN from './locales/cn/translation.json'
import translationJP from './locales/jp/translation.json'

const resources = {
    cn: {
        translation: translationCN
    },
    en: {
        translation: translationEN
    },
    jp: {
        translation: translationJP
    }
};

// The internal locale keys are not valid BCP 47 language tags, so map them
// before exposing them to assistive technology via the lang attribute.
const htmlLang: { [key: string]: string } = {
    cn: 'zh-Hans',
    en: 'en',
    jp: 'ja'
};

const syncHtmlLang = (language: string) => {
    document.documentElement.lang = htmlLang[language] ?? language;
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
    });

syncHtmlLang(i18n.language);
i18n.on('languageChanged', syncHtmlLang);

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


i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
    });

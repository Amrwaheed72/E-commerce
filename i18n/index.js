import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { fallbackLng, languages, defaultNS } from './settings';

const initI18next = async (lng, ns) => {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language, namespace) => import(`../public/locales/${language}/${namespace}.json`)))
        .init({
            supportedLngs: languages,
            fallbackLng,
            lng,
            ns: ns || defaultNS,
            defaultNS,
            fallbackNS: defaultNS,
        });
    return i18nInstance;
};

// This function will be used in our server components
export async function useTranslation(lng, ns) {
    const i18nextInstance = await initI18next(lng, ns);
    return {
        t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
        i18n: i18nextInstance,
    };
}
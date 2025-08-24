'use client'; // This file is for the client, so this directive is helpful.

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi) // Loads translations from /public/locales
    .use(LanguageDetector) // Detects user language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        supportedLngs: ['en', 'ar'],
        fallbackLng: 'ar',
        debug: process.env.NODE_ENV === 'development',
        ns: ['common', 'navbar', 'landing_page'],
        defaultNS: 'common',
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['cookie', 'localStorage'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Make sure this path is correct
        },
        react: {
            useSuspense: false // Add this to prevent hydration issues
        }
    });

export default i18n;
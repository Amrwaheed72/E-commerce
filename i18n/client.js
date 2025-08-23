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
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development', // Set to true to see logs

        // Define the namespaces you're using
        ns: ['common', 'navbar', 'landing_page'],
        defaultNS: 'common',

        // Configuration for language detector
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['cookie', 'localStorage'],
        },

        // Configuration for the backend
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
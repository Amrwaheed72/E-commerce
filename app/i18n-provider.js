'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/client';

export function I18nProvider({ children }) {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.dir(i18n.language);

        // Update to use Tailwind classes directly
        const bodyElement = document.body;
        if (i18n.language === "ar") {
            bodyElement.classList.add("font-arabic");
            bodyElement.classList.remove("font-sans");
        } else {
            bodyElement.classList.add("font-sans");
            bodyElement.classList.remove("font-arabic");
        }
    }, [i18n, i18n.language]);

    return <>{children}</>;
}
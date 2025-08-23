'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// This import initializes the i18next instance
import '../i18n/client';

export function I18nProvider({ children }) {
    const { i18n } = useTranslation();

    // This effect will run on the client and update the HTML tag's attributes
    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.dir(i18n.language);
    }, [i18n, i18n.language]);

    return <>{children}</>;
}
import { useEffect } from 'react'
import { useState } from 'react'
import { Dashboard } from '../cmps/dashboard/dashboard'
import { Sidebar } from '../cmps/sidebar/side-bar'
import { utilService } from '../services/util.service'

import { I18nProvider, LOCALES } from '../i18n'


export const HomePage = () => {
    const [language, setLanguage] = useState(null)

    useEffect(() => {
        const lang = utilService.getLang(navigator.language)
        setLanguage(lang)
    }, [])

    return (
        <I18nProvider locale={LOCALES[language]}>
            <section className="homepage-container">
                <Sidebar language={language} setLanguage={setLanguage} />
                <Dashboard language={language} setLanguage={setLanguage} />
            </section>
        </I18nProvider>
    )
}
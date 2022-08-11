import { SidebarHeader } from "./sidebar-header"
import { Menu } from "./menu"
import { Options } from "./options"

import { useEffectUpdate } from "../../hook/useEffectUpdate"

export const Sidebar = (props) => {
    const { language, setLanguage } = props

    useEffectUpdate(() => {
        setDirection()
    }, [language])

    const setDirection = () => {
        if (language === 'HEBREW') {
            document.querySelector('.sidebar-container').style.right = 0
        }
    }

    return (
        <>
            <input type="checkbox" id="sidebar-toggle" className="toggle-btn" />
            <section className="sidebar-container">
                <SidebarHeader />
                <Menu language={language} />
                <Options setLanguage={setLanguage} />
            </section>
        </>
    )
}

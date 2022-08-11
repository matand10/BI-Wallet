import { dataService } from "../../services/data.service"
import { Select } from "../select"


export const Options = (props) => {
    const { setLanguage } = props
    const labels = dataService.getLanguageLabels()

    const handleChange = ({ target }) => {
        const elHTML = document.querySelector('html')
        const { value } = target
        if (value === 'English') {
            elHTML.dir = 'ltr'
            setLanguage('ENGLISH')
        }
        else if (value === 'עברית') {
            elHTML.dir = 'rtl'
            setLanguage('HEBREW')
        }
    }

    return (
        <section className="sidebar-option">
            <div className="divider"></div>
            <Select cb={handleChange} labels={labels} />
        </section>
    )
}
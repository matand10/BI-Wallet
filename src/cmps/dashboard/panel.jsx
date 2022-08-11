import { Search } from './search'
import { Select } from '../select'
import { dataService } from '../../services/data.service'
import { UploadFile } from './upload-file'

export const Panel = (props) => {
    const { setFilterBy, setExcelData, setLoading } = props
    const labels = dataService.getLabels()

    const handleChange = ({ target }) => {
        const { value } = target
        setFilterBy((prevState) => ({ ...prevState, sort: value }))
    }

    return (
        <section className="panel-container">
            <Select cb={handleChange} labels={labels} />
            <Search setFilterBy={setFilterBy} />
            <UploadFile setExcelData={setExcelData} setLoading={setLoading} />
        </section>
    )
}

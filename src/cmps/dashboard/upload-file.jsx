import { dataService } from "../../services/data.service"
import { fileService } from "../../services/file.service"
import { utilService } from "../../services/util.service"
import { BsUpload } from 'react-icons/bs'

export const UploadFile = (props) => {
    const { setExcelData, setLoading } = props

    const handleFile = async ({ target }) => {
        if (!target.files.length) return
        let file = target.files[0]
        if (file) {
            if (fileService.getFileTypes().includes(file.type)) {
                let data = await fileService.getFileData(file)
                data.shift()
                let newData = {}
                data = data.map(obj => {
                    newData._id = utilService.makeId()
                    newData.date = obj.__EMPTY_1 * 86400 - 172800 - (31556926 * 70)
                    newData.code = obj.__EMPTY_2
                    newData.description = obj.__EMPTY_3
                    newData.income = obj.__EMPTY_5
                    newData.expense = obj.__EMPTY_6
                    newData.balance = obj.__EMPTY_8
                    return { ...newData }
                })
                dataService.save(data)
                setExcelData(data)
                setLoading(false)
            } else return console.log('Try another file')
        }
    }

    return (
        <div className="panel-upload">
            <label>
                <span className="table-button">
                    <BsUpload />
                </span>
                <p>
                    <input type="file" onChange={handleFile} />
                </p>
            </label>
        </div>
    )
}

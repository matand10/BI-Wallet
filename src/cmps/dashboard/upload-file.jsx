import { dataService } from "../../services/data.service"
import { fileService } from "../../services/file.service"
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
                data = data.map(obj => {
                    const objKey = ['date', 'code', 'description', 'reference', 'income', 'expense', 'date-value', 'balance']
                    const objKeys = {}
                    const distructedObj = Object.values(obj)
                    objKey.forEach((obj, idx) => {
                        objKeys[obj] = distructedObj[idx]
                    })
                    objKeys.date = objKeys.date * 86400 - 172800 - (31556926 * 70)
                    objKeys['date-value'] = objKeys['date-value'] * 86400 - 172800 - (31556926 * 70)
                    return { ...objKeys }
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
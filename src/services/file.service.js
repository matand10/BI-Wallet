import * as XLSX from 'xlsx'
import { saveAs } from './file.saver.service'

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
const EXCEL_EXTENSION = '.xlsx'

export const fileService = {
    getFileData,
    getFileTypes,
    downloadAsExcel
}

function getFileData(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = (ev) => {
            const res = ev.target.result
            const workbook = XLSX.read(res, { type: 'buffer' })
            const worksheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[worksheetName]
            const data = XLSX.utils.sheet_to_json(worksheet)
            return resolve(data)
        }
    })
}

function getFileTypes() {
    return ['application/vnd.ms-excel']
}

function downloadAsExcel(data) {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = {
        Sheets: {
            'data': worksheet,
        },
        SheetNames: ['data'],
    }
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    _saveAsExcel(excelBuffer, 'myFile')
}

function _saveAsExcel(buffer, filename) {
    const data = new Blob([buffer], { type: EXCEL_TYPE })
    saveAs(data, filename + '_export_' + new Date().getTime().EXCEL_EXTENSION)
}
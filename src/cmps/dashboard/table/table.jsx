import { useState } from "react"
import { useOutletContext } from 'react-router-dom'

import { TableHead } from "./table-head"
import { TableBody } from "./table-body"
import { TableButtons } from "./table-buttons"
import { TableTitle } from "./table-title"


export const Table = () => {
    const { excelData, language, onRemoveData, onAddData, onRemoveTable } = useOutletContext()
    let [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(10)

    const onPaging = (pageNum) => {
        setCurrentPage(pageNum)
    }

    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage
    const currentData = excelData.slice(indexOfFirstData, indexOfLastData)


    if (!excelData) return <div>Loading...</div>

    return (
        <section className="main-table">
            <div className="transactions-card">
                <TableTitle language={language} onAddData={onAddData}
                    onRemoveTable={onRemoveTable} excelData={excelData} />

                <div className="responsive-table">
                    <table>
                        <TableHead language={language} />
                        <TableBody data={currentData} onRemoveData={onRemoveData} />
                    </table>
                </div>

                <TableButtons dataPerPage={dataPerPage} totalData={excelData.length} onPaging={onPaging} />
            </div>
        </section>
    )
}


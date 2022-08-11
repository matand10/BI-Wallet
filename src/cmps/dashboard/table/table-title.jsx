import { useEffect, useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'


import { Modal } from '../../modal'
import { fileService } from '../../../services/file.service'
import { TableMenu } from './table-menu'


import { AiOutlineMenu } from 'react-icons/ai'


export const TableTitle = (props) => {
    const { language, onAddData, excelData, onRemoveTable } = props
    const [modal, setModal] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    let modalRef = useRef()
    useEffect(() => {
        document.addEventListener("mousedown", eventListener)
        return () => {
            document.removeEventListener("mousedown", eventListener)
        }
    }, [])

    const eventListener = (ev) => {
        if (!modalRef.current?.contains(ev.target)) {
            setModal(null)
            setIsMenuOpen(false)
        }
    }

    const clearTable = () => {
        onRemoveTable()
    }

    const onDownload = () => {
        fileService.downloadAsExcel(excelData)
    }

    return (
        <section className="table-title">
            <h3><FormattedMessage id="transactions" /></h3>
            <div className="table-menu">
                <span className="table-button" onClick={() => setIsMenuOpen(true)}><AiOutlineMenu /></span>
                {isMenuOpen && <TableMenu modalRef={modalRef} setModal={setModal} clearTable={clearTable} onDownload={onDownload} />}
            </div>
            {modal && <Modal modalRef={modalRef} setModal={setModal} onAddData={onAddData} excelData={excelData} />}
        </section>
    )
}
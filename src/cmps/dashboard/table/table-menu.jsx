import { BsPlusCircle } from 'react-icons/bs'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'

import { FormattedMessage } from 'react-intl'

export const TableMenu = (props) => {
    const { modalRef, clearTable, setModal, onDownload } = props

    return (
        <section className="header-modal" ref={modalRef}>
            <div className="header-modal-container">
                <p onClick={() => setModal({})}><span><BsPlusCircle /></span><FormattedMessage id="add" /></p>
                <p onClick={onDownload}><span><AiOutlineCloudDownload /></span><FormattedMessage id="download" /></p>
                <p onClick={clearTable}><span><AiOutlineDelete /></span><FormattedMessage id="delete" /></p>
            </div>
        </section>
    )
}
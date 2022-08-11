import { useEffect, useState } from "react"
import { FormattedMessage } from 'react-intl'


import { dataService } from "../services/data.service"
import { InputBox } from "./input"


export const Modal = (props) => {
    const { modalRef, setModal, onAddData, excelData } = props
    const [balance] = useState(dataService.calculateBalance(excelData))
    const [trans, setTrans] = useState(() => {
        return {
            date: '',
            code: '',
            description: '',
            income: ' ',
            expense: ' ',
            balance: (balance.income - balance.expenses).toFixed(2)
        }
    })

    useEffect(() => {
        document.querySelector('html').classList.add('modal-open')
        return () => document.querySelector('html').classList.remove('modal-open')
    }, [])

    const addTrans = (ev) => {
        ev.preventDefault()
        onAddData(trans)
        setModal(null)
    }

    const inputs = [
        { _id: 1, text: 'date', type: 'date', cb: setTrans },
        { _id: 2, text: 'code', type: 'number', cb: setTrans },
        { _id: 3, text: 'description', type: 'text', cb: setTrans },
        { _id: 4, text: 'income', type: 'number', cb: setTrans },
        { _id: 5, text: 'expense', type: 'number', cb: setTrans },
    ]

    return (
        <div className="modal-container">
            <span className="close" onClick={() => setModal(null)}>&times;</span>
            <div className="modal-wrapper" ref={modalRef} >
                <div className="modal-header flex align-center justify-center">
                    <p><FormattedMessage id="add-trans" /></p>
                </div>
                <div className="modal-content">
                    <form onSubmit={addTrans}>
                        <div className="trans-details">
                            {inputs.map(input => <InputBox key={input._id} text={input.text} type={input.type} cb={input.cb} />)}
                            <button><FormattedMessage id="submit" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
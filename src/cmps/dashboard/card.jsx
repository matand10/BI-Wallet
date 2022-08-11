import { FormattedMessage } from 'react-intl'
import { utilService } from '../../services/util.service'

export const Card = (props) => {
    const { data, text, icon } = props

    const getBalance = () => {
        if (typeof data === 'object') {
            if (data.income && data.expenses) return data.income - data.expenses
            else if (data.income) return data.income
            else if (data.expenses) return -data.expenses
        } else return data
    }

    return (
        <div className="card-single">
            <div className="card-body">
                <span className="card-single-icon">{icon}</span>
                <div className="card-content">
                    <h5><FormattedMessage id={text} /></h5>
                    {data && <h4>{utilService.ILSformat(getBalance())}</h4>}
                </div>
            </div>
        </div>
    )
}
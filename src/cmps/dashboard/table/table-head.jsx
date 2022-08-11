import { FormattedMessage } from 'react-intl'
import { useEffect } from 'react'

export const TableHead = (props) => {
    const { language } = props

    useEffect(() => {
        setDirection()
    }, [language])

    const setDirection = () => {
        const elHeadTable = document.querySelector('.table-head')
        if (language === 'HEBREW') {
            elHeadTable.style.textAlign = 'right'
        } else elHeadTable.style.textAlign = 'left'
    }

    return (
        <thead>
            <tr className="table-head">
                <th><FormattedMessage id="date" /></th>
                <th><FormattedMessage id="code" /></th>
                <th><FormattedMessage id="description" /></th>
                <th><FormattedMessage id="inc" /></th>
                <th><FormattedMessage id="exp" /></th>
                <th><FormattedMessage id="bal" /></th>
            </tr>
        </thead>
    )
}
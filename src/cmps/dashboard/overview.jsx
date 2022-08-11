import { MdOutlinePending } from 'react-icons/md'
import { IoIosCloudDone } from 'react-icons/io'
import { BsBriefcase } from 'react-icons/bs'

import { useState, useEffect } from 'react'
import { Card } from './card'

import { FormattedMessage } from 'react-intl'
import { dataService } from '../../services/data.service'

export const Overview = (props) => {
    const { data } = props
    const [totalBalance, setTotlaBalance] = useState({ expenses: 0, income: 0 })

    useEffect(() => {
        if (!data) return
        const total = dataService.calculateBalance(data)
        setTotlaBalance(total)
    }, [data])

    const cards = [
        {
            id: 1,
            data: totalBalance,
            text: 'balance',
            icon: <BsBriefcase />,
        },
        {
            id: 2,
            data: totalBalance.income,
            text: 'income',
            icon: <MdOutlinePending />
        },
        {
            id: 3,
            data: totalBalance.expenses,
            text: 'expense',
            icon: <IoIosCloudDone />
        }
    ]



    return (
        <section>
            <h2 className="dash-title"><FormattedMessage id="account-summary" /></h2>
            <div className="dash-cards">
                {cards.map(card => <Card key={card.id}
                    data={card.data} text={card.text} icon={card.icon} />)}
            </div>
        </section>
    )
}


import { useState } from 'react';
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { dataService } from '../../../services/data.service';


export const DoughnutChart = (props) => {
    const { excelData } = props
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const balance = dataService.calculateBalance(excelData)
        setBalance(balance)
    }, [])

    const data = {
        labels: ['Expenses', 'Income'],
        datasets: [{
            label: 'Expenese',
            backgroundColor: ['#FF5964', '#3BB273'],
            data: [balance.expenses, balance.income],
        }]
    };

    return (
        <section className="doughnut-wrapper card-single chart-padding">
            <h3><FormattedMessage id="balance" /></h3>
            <div>
                <div>
                    <Doughnut data={data} height={400} width="100%"
                        options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </section>
    )
}
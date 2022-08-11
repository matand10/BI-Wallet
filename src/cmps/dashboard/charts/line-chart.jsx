import { Line } from "react-chartjs-2"
import { utilService } from '../../../services/util.service'

import { FormattedMessage } from 'react-intl'

export const LineChart = (props) => {
    const { excelData } = props
    const labels = excelData.map(obj => utilService.getExactDate(obj.date));

    const data = {
        labels: labels,
        datasets: [{
            label: 'Balance',
            backgroundColor: ['#FF5964'],
            borderWidth: 1,
            data: excelData.map(obj => obj.balance),
        }]
    };

    return (
        <section className="line-wrapper card-single chart-padding">
            <h3><FormattedMessage id="balance" /></h3>
            <div>
                <div>
                    <Line data={data}
                        height={400}
                        width="100%"
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    grid: {
                                        drawBorder: false,
                                        color: function (context) {
                                            return '#fff';
                                        },

                                    }
                                }
                            }
                        }} />
                </div>
            </div>
        </section>
    )
}
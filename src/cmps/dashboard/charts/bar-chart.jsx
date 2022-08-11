import { Bar } from "react-chartjs-2"
import { FormattedMessage } from "react-intl";
import { utilService } from '../../../services/util.service'


export const BarChart = (props) => {
    const { excelData } = props

    const labels = excelData.map(obj => utilService.getExactDate(obj.date));

    const data = {
        labels: labels,
        datasets: [{
            label: 'Expenese',
            backgroundColor: '#FF5964',
            data: excelData.map(obj => obj.expense),
        },
        {
            label: 'Income',
            data: excelData.map(obj => obj.income),
            backgroundColor: '#3BB273',
        }]
    };

    var options = {
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
    }

    return (
        <section className="bar-wrapper card-single chart-padding" >
            <h3><FormattedMessage id="analytics" /></h3>
            <div>
                <div>
                    <Bar data={data} height={400} width="100%"
                        options={options} />
                </div>
            </div>
        </section >
    )

}
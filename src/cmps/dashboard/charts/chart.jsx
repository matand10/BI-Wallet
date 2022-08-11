import { useOutletContext } from 'react-router-dom'

import { LineChart } from './line-chart'
import { BarChart } from './bar-chart';
import { DoughnutChart } from './doughnut-chart';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export const Charts = () => {
    const { excelData } = useOutletContext()

    return (
        <section className="chart-container">
            <LineChart excelData={excelData} />
            <DoughnutChart excelData={excelData} />
            <BarChart excelData={excelData} />
        </section>
    )
}
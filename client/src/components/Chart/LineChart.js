import Chart from 'react-apexcharts'

import { Section } from './Chart.elements'

export default function LineChart({ title }) {
    const chartData = {
        options: {
            chart: {
                foreColor: 'white',
                background: 'transparent',
                height: '100%',
                toolbar: {
                    show: false,
                },
            },
            theme: {
                mode: 'dark',
                palette: 'palette2',
            },
            xaxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'March',
                    'Apr',
                    'May',
                    'June',
                    'July',
                    'Aug',
                    'Sept',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
            },
        },
        series: [
            {
                name: 'Expense',
                data: [400, 200, 45, 50, 199, 60, 70, 91, 49, 60, 70, 91],
            },
            {
                name: 'Savings',
                data: [200, 100, 455, 508, 93, 608, 720, 91, 49, 60, 70, 91],
            },
        ],
    }

    return (
        <>
            <Section>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type='line'
                />
            </Section>
        </>
    )
}

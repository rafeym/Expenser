import ApexChart from 'react-apexcharts'

import { Section } from './Chart.elements'

export default function Chart() {
    const state = {
        series: [
            {
                name: 'Total',
                data: [400, 430, 448, 470, 540, 580],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                foreColor: 'white',
                background: 'transparent',
            },
            theme: {
                mode: 'dark',
                palette: 'palette2',
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [
                    'Expenses',
                    'Savings',
                    'Car Insurance',
                    'Food',
                    'Subscriptions',
                    'Gas',
                ],
            },
        },
    }

    return (
        <Section>
            <div className='title'>
                <h2>Transactions View</h2>
            </div>

            <ApexChart
                options={state.options}
                series={state.series}
                type='bar'
                className='chart'
            />
        </Section>
    )
}

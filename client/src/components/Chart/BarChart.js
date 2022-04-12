import ApexChart from 'react-apexcharts'

import { Section } from './Chart.elements'

export default function Chart({ expenseTotal, savingsTotal, title, loading }) {
    const state = {
        series: [
            {
                name: 'Total',
                data: [expenseTotal, savingsTotal],
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
                categories: ['Expenses', 'Savings'],
            },
        },
    }

    const total = expenseTotal + savingsTotal

    return (
        <Section>
            {loading ? (
                'Fetching data...'
            ) : total === 0 ? (
                <>
                    <div className='title'>
                        <h2>{title}</h2>
                    </div>
                    <p>No transaction data</p>
                </>
            ) : (
                <>
                    <div className='title'>
                        <h2>{title}</h2>
                    </div>

                    <ApexChart
                        options={state.options}
                        series={state.series}
                        type='bar'
                        className='chart'
                    />
                </>
            )}
        </Section>
    )
}

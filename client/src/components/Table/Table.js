import moment from 'moment'
import { STable, Heading } from './Table.elements'

export default function Table({
    data = [],
    title,
    loading,
    deleteTransaction,
}) {
    return (
        <>
            <STable>
                <Heading>{title}</Heading>
                <table>
                    {loading ? (
                        'Fetching transactions...'
                    ) : (
                        <>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((t) => (
                                    <tr>
                                        <td>{t.title}</td>
                                        <td>${t.amount}</td>
                                        <td>
                                            {moment(t.date).format(
                                                'MMM Do YYYY'
                                            )}
                                        </td>
                                        <td
                                            className='delete-btn'
                                            onClick={() =>
                                                deleteTransaction(t._id)
                                            }
                                        >
                                            Delete
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )}
                </table>
            </STable>
        </>
    )
}

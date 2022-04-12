import Sidebar from '../components/Sidebar/Sidebar'
import TransactionForm from '../components/Transaction/TransactionForm'

import { Div, Section } from '../styles/Reusable.elements'

export default function Transaction() {
    return (
        <>
            <Div>
                <Sidebar />
                <Section>
                    <TransactionForm />
                </Section>
            </Div>
        </>
    )
}

import { Section } from './FAQ.elements'

import { IoIosArrowForward } from 'react-icons/io'

export default function FAQ() {
    const faqs = [
        {
            text: 'How to manage time and get good marks for trips',
        },
        {
            text: 'How to regulate transactions over time',
        },
        {
            text: 'Withdrawing money through an ATM',
        },
    ]
    return (
        <Section>
            <div className='title'>
                <h2>Tips on how to save more!</h2>
            </div>
            <div className='faqs'>
                {faqs.map((faq) => {
                    return (
                        <div className='faq'>
                            <div className='info'>
                                {faq.icon}
                                <h4>{faq.text}</h4>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

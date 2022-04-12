import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { newTransactionAction } from '../../store/actions/transactionActions'

import { FormContainer } from './Transaction.elements'

import { toast } from 'react-toastify'

export default function TransactionForm() {
    const initState = {
        title: '',
        amount: 0,
        category: '',
        id: '',
    }
    const [formData, setFormData] = useState(initState)
    const {
        user: { id },
    } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        if (
            formData.title === '' ||
            formData.amount === 0 ||
            formData.category === ''
        ) {
            toast.error('Please fill in all required fields')
        } else {
            formData.id = id
            dispatch(newTransactionAction(formData))
            setFormData(initState)
        }
    }

    return (
        <FormContainer>
            <h1>New Transaction</h1>
            <p>Fill in all the required fields *</p>
            <form>
                <div className='form-row'>
                    <div className='form-column'>
                        <label>Title*</label>
                        <input
                            type='text'
                            placeholder='Title'
                            name='title'
                            value={formData.title}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className='form-column'>
                        <label>Amount*</label>
                        <input
                            type='number'
                            placeholder='Amount'
                            name='amount'
                            value={formData.amount}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-column'>
                        <label>Category*</label>
                        <select
                            name='category'
                            value={formData.category}
                            onChange={handleOnChange}
                        >
                            <option value='' disabled={true}>
                                Choose Category
                            </option>
                            <option value='expense'>Expense</option>
                            <option value='savings'>Savings</option>
                        </select>
                    </div>
                </div>

                <div className='create-t-btn' onClick={handleSubmit}>
                    Create
                </div>
                <div
                    className='create-t-btn'
                    onClick={() => setFormData(initState)}
                >
                    Clear
                </div>
            </form>
        </FormContainer>
    )
}

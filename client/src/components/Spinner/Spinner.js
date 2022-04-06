import ClipLoader from 'react-spinners/ClipLoader'

import './Spinner.scss'

const Spinner = ({ loading }) => {
    return (
        <div className='loading-spinner'>
            <ClipLoader color={'#4f48ec'} size={100} loading={loading} />
        </div>
    )
}

export default Spinner

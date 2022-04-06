import { Link } from 'react-router-dom'
import { Nav } from './Navbar.elements'

export default function Navbar({ user }) {
    return (
        <Nav>
            <div className='title'>
                <h4>Hi {user.name},</h4>
                <h1>Welcome to Expenser.</h1>
            </div>
            <Link to='/transaction/new' className='create-btn'>
                <span>New Transaction</span>
            </Link>
        </Nav>
    )
}

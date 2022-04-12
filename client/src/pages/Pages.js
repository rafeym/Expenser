import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RouteLink from '../components/Routes/RouteLink'
import PrivateRoute from '../components/Routes/PrivateRoute'

import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Transaction from './Transaction'
import Expenses from './Expenses'
import Savings from './Savings'

import { ToastContainer } from 'react-toastify'

const Pages = () => {
    return (
        <>
            <Router>
                <ToastContainer />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <RouteLink exact path='/login' component={Login} />
                    <PrivateRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                    />
                    <PrivateRoute
                        exact
                        path='/transaction/new'
                        component={Transaction}
                    />
                    <PrivateRoute
                        exact
                        path='/expenses/:page?'
                        component={Expenses}
                    />
                    <PrivateRoute
                        exact
                        path='/savings/:page?'
                        component={Savings}
                    />
                </Switch>
            </Router>
        </>
    )
}

export default Pages

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RouteLink from '../components/Routes/RouteLink'
import PrivateRoute from '../components/Routes/PrivateRoute'

import Login from './Login'
import Dashboard from './Dashboard'

const Pages = () => {
    return (
        <>
            <Router>
                <Switch>
                    <RouteLink exact path='/' component={Login} />
                    <PrivateRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                    />
                </Switch>
            </Router>
        </>
    )
}

export default Pages

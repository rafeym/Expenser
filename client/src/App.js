import store from './store/store'
import { Provider } from 'react-redux'

import Pages from './pages/Pages'

function App() {
    return (
        <>
            <Provider store={store}>
                <Pages />
            </Provider>
        </>
    )
}

export default App

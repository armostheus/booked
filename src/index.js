import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import App from './components/App'
import reducers from './reducer'

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App /> 
    </Provider>
</Router>, 
document.querySelector('#root'));

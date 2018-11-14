import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Main from './components/Main'
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root'));

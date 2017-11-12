import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { addIds } from './actions/index.js'
import combinedReducer from './reducers/combinedReducer'

let initialState = {}
let store = createStore(combinedReducer, initialState);


ReactDOM.render(
    <Provider store={store}>
        <div />
        {/* Insert container component here */}
    </Provider>,
    document.getElementById('app')
);
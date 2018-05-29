import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineForms, modelReducer } from 'react-redux-form'
import thunkMiddleware from 'redux-thunk'

import posts from './posts'
import forms from './forms'

const reducers = combineReducers({
    posts,
    forms
})

export default (initialState) => {
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
  
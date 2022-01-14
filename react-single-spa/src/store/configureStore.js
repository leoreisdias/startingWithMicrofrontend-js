import { configureStore } from '@reduxjs/toolkit';
import { logger } from './middleware/logger';
import  reducer  from './reducers';
import login from './login'
import {combineReducers} from 'redux'

const reducers = combineReducers({reducer, login})

const store = configureStore({reducer: reducers, middleware: (getDefault) => getDefault().concat(logger)})

export default store;
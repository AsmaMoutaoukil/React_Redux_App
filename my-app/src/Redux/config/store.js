//Create STORE
import { applyMiddleware, createStore } from 'redux'
import logger from "redux-logger"

import reducers  from "../reducers"
const middlewar = [logger]
const store = createStore(reducers, applyMiddleware(...middlewar))
 
export default store 


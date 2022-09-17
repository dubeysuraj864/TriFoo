import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllPizzaReducer } from "./reducers/pizzaReducers";



const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer
})
const initialState = {} 
const middleware =[thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    // eslint-disable-next-line no-undef
    applyMiddleware(...middleware) );
export default store;
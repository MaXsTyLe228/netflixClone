import {createStore, applyMiddleware, combineReducers} from "redux";
import {filmReducer} from "./filmReducer";
import {tvReducer} from "./tvReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    filmReducer: filmReducer,
    tvReducer: tvReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
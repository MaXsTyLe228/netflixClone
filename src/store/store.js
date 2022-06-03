import {createStore, applyMiddleware, combineReducers} from "redux";
import {filmReducer} from "./filmReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    filmsData: filmReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
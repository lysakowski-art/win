import { createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./reducers";
import thunk from "redux-thunk"
const initialState = {

}
export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
    );

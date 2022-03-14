import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import themeReducer from "./reducers/theme";
import { setUser } from "./actions/actionCreators";

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const user = localStorage.getItem("jwt");
if (user) store.dispatch(setUser(JSON.parse(user)));

export default store;

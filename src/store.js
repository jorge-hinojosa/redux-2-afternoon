import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

import budgetReducer from "./ducks/budgetReducer";
import userReducer from "./ducks/userReducer";

const root = combineReducers({
  budget: budgetReducer,
  user: userReducer
});

export default createStore(root, applyMiddleware(promise));

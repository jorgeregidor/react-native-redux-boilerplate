import { combineReducers } from "redux";
import { infoReducer } from "./info_reducers";


const rootReducer = combineReducers({
  info: infoReducer,
});

export default rootReducer;

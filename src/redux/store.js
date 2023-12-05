import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEchancers = composeWithDevTools();
const store = createStore(rootReducer, composedEchancers);
export default store;

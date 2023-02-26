import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(composeWithDevTools(rootReducer));

export default store;
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./demo1/reducers";
import autoTodoReducer from "./demo2/reducers/autoTodoReducer";
import App from "./demo1/components/App";
import Calc1 from "./demo2/containers/Calc";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { combineReducers } from "redux";
const appReducer = combineReducers({
  rootReducer: rootReducer,
  autoTodoReducer: autoTodoReducer
});
console.log(appReducer);
const store = createStore(appReducer);
console.log(store.getState());
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Calc1} />
        <Route path="/redux0" component={App} />
        <Route path="/redux1" component={Calc1} />
      </Route>
    </Router>
  </Provider>,
  document.body
);

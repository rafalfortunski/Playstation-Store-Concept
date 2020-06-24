import React from "react";
import ReactDOM from "react-dom";
import Root from "./views/Root";
import * as serviceWorker from "./serviceWorker";
import cartReducer from "./reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

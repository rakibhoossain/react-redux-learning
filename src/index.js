import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'

import store from './redux'
import Counter from './counter'

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter/>
    </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

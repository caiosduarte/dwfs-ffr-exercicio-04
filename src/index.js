import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// BrowserRouter para criar a Rota
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { favorites } from './reducers/favorite'

const store = createStore(
    favorites,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");

ReactDOM.render(
    // envelopar o App com o BrowserRouter
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    rootElement
);

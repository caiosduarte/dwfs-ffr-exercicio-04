import React from "react";
import ReactDOM from "react-dom";
// BrowserRouter para criar a Rota
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
    // envelopar o App com o BrowserRouter
    <BrowserRouter>
         <App />
    </BrowserRouter>, 
    rootElement
);

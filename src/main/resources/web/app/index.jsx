import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./BasicExample";
import AnotherComp from "./AnotherComp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <AnotherComp/>
        <BasicExample/>
    </>
);
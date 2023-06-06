import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 33},
    {id: 2, message: 'It is my first post!', likesCount: 355},
    {id: 3, message: 'I am going to NYC!!!', likesCount: 876},
    {id: 4, message: 'I wanna visit Australia!', likesCount: 3565},
]

let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Sara'},
    {id: 4, name: 'Jon'},
    {id: 5, name: 'Veronika'},
    {id: 6, name: 'Paul'},
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'I would like to visit Italy'},
    {id: 3, message: 'I am going to NYC'},
    {id: 4, message: 'Learn React right now!!!'},
]





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts} dialogs={dialogs} messages={messages} />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import {render} from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../store/reducers";
import '../index.css';
import App from '../App';

const rootReducer = combineReducers({
    github: reducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

const MainApp = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

const renderApp = () => {
    const { getByTestId, queryAllByTestId, getAllByText, container, getByText } = render(<MainApp />);
    return {
        getByTestId,
        queryAllByTestId,
        getAllByText,
        container,
        getByText,
    };
};

export default renderApp;
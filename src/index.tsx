import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { reducer } from "./store/reducers";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loader from "./components/Loader";

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['github']
};

const rootReducer = combineReducers({
    github: reducer
});

// @ts-ignore
const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

// @ts-ignore
export const persistor = persistStore(store);

render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PersistGate loading={<Loader />} persistor={persistor}>
                <App />
              </PersistGate>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

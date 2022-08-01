import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// import * as serviceWorker from "./serviceWorker"
import { StateProvider } from './Components/stateProvider';
import reducer, { initialState } from './Components/reducer';
import {unregister} from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <App />
    {/* </StateProvider> */}

  </React.StrictMode>
);


// serviceWorker.unregister();

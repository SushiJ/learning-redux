import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from "./components/Application"

import { store } from './store';
import { Provider } from 'react-redux';
import { Theme } from '@twilio-paste/core/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>,
    </Theme.Provider>
  </Provider>
)

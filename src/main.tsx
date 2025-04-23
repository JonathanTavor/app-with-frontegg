import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {FronteggProvider} from '@frontegg/react';
import {BrowserRouter} from 'react-router-dom';

const contextOptions = {
    baseUrl: 'https://app-i4p75rhnyvbf.frontegg.com',
    clientId: '8900577c-1d7f-4e55-b98d-6d87d6bb2143',
    appId: 'dc9addb3-16cd-4485-8cf4-85851c8f3468'
};

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <FronteggProvider
            contextOptions={contextOptions}
            hostedLoginBox={true}
            appName="app-with-frontegg"
        >
            <BrowserRouter>
               <App />
            </BrowserRouter>
        </FronteggProvider>
    </React.StrictMode>
);

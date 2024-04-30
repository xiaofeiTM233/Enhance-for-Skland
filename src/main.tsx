import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';
import {HashRouter} from 'react-router-dom';

import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '@icon-park/react/styles/index.css';

axios.defaults.baseURL = 'https://zonai.skland.com';
axios.defaults.headers.platform = 1;
axios.defaults.headers.os = 33;
axios.defaults.headers.dId = 'de9759a5afaa634f';
axios.defaults.headers.language = 'zh-cn';
axios.defaults.headers.vName = '1.5.1';
axios.defaults.headers.manufacturer = 'Xiaomi';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <App/>
    </HashRouter>
);

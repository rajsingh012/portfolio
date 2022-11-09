import React from 'react';
import ReactDOM from 'react-dom';
import MasterLayout from './Component/masterLayout';
import { initializeApp } from './../sw';

ReactDOM.render(<MasterLayout />, document.getElementById('root'));
initializeApp();
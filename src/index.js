import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.scss';
import Nav from './components/Nav';

import App from './components/App';

ReactDOM.render(
    <BrowserRouter forceRefresh={false}>
        <Nav/>
        <Switch>
        <Route path='/home' component={App}/>
        <Route path='/experience' component={App}/>
        <Route path='/skills' component={App}/>
        <Route path='/gallery' component={App}/>
        <Route path='/' component={App}/>
        </Switch>

    </BrowserRouter>,
    document.getElementById('mountNode'),
);
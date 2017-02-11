import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './Home.jsx';
import Main from './Main_layout';
import Account from './Account/Account_Layout.jsx';

export default class App extends React.Component{
    render(){
        return <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}/>
                <Route path="account" component={Account}/>
            </Route>
        </Router>
    }
}
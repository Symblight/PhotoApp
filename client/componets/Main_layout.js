/**
 * Created by Admin on 09.02.2017.
 */

import React from 'react';
import * as api from '../../etc/data.js';
import Nav from './Navbar.jsx';
import SignIn from './SignForms/SignIn.jsx';
import './Main_l.less';

export default class Main_layout extends React.Component{
    render(){
        return<div>
            {
                api.Account.id ?
                    <div> <Nav/>
                        <div className="main_wrap">
                            {this.props.children}
                        </div></div>:
                    <SignIn/>
            }
        </div>
    }
}

const MainPage =(props)=><div> <Nav/>
    <div className="main_wrap">
        {this.props.children}
    </div></div>

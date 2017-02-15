/**
 * Created by Admin on 09.02.2017.
 */

import React from 'react';
import * as api from '../../etc/data.js';
import Nav from './Navbar.jsx';
import SignIn from './SignForms/SignIn.jsx';
import FooterForm from './Footer_form.jsx';
import './Main_l.less';

export default class Main_layout extends React.Component{
    render(){
        return<div className="container_m">
            {
                api.Account.id ?
                    <section className="selc">
                        <Nav/>
                        <main className="main_wrap">
                            {this.props.children}
                        </main>
                        <FooterForm/>
                    </section>:
                    <SignIn/>
            }
        </div>
    }
}

const MainPage =(props)=><div> <Nav/>
    <div className="main_wrap">
        {this.props.children}
    </div></div>

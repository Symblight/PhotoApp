import React from 'react';
import {Link} from 'react-router';
import './Nav.less';
import Home from './menu items/Home.jsx';


export default class Navbar_form extends React.Component{
    render(){
        return<nav className="nav_wrap">
            <ul className="wrap_menu_nav">
                <li className="el_menu"><Link to="/"><Home/></Link></li>
                <li className="el_menu">Search</li>
                <li className="el_menu"><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    }
}
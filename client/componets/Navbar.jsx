import React from 'react';
import {Link} from 'react-router';
import './Nav.less';
import Home from './menu items/Home.jsx';


export default class Navbar_form extends React.Component{
    render(){
        return<nav className="nav_wrap" role="navigation">
            <div className="menu_panel">
                <div className="wrap_menu_nav">
                    <div className="el_menu"><Link to="/"><Home/></Link></div>
                    <div className="el_menu"><h4>Search</h4></div>
                    <div className="el_menu"><h4>Photo</h4></div>
                    <div className="el_menu"><h4>Like</h4></div>
                    <div className="el_menu"><Link to="/account"><h4>Account</h4></Link></div>
                </div>
            </div>
        </nav>
    }
}
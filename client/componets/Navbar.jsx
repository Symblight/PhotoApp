import React from 'react';
import {Link} from 'react-router';
import './Nav.less';
import {Navbar,Nav,NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Navbar_form extends React.Component{
    render(){
        return<Navbar className="nav_wrap">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"> Photo app</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}>Search</NavItem>
                <LinkContainer to="/account"><NavItem eventKey={2}>Account</NavItem></LinkContainer>
            </Nav>
        </Navbar>
    }
}
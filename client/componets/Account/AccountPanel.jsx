import React from 'react';
import {Row,Col,Grid, Panel} from 'react-bootstrap';
import * as api from '../../../etc/data.js';
import './Info.less';

export default class InfoPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            account: api.Account
        }
    }
    render(){
        return<header className="container_i">
                <div className="avatar_l"><img src={api.Account.avatar} className="avatar"/></div>
                <div className="menu_info">
                    <div className="btn_name">
                        <div><h2>{api.Account.username}</h2></div>
                        <div><button>Edit account</button></div>
                    </div>
                </div>
        </header>
    }
}
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
        return<div className="container_i">
                <div><img src={api.Account.avatar} className="avatar"/></div>
                <div><h2>{api.Account.username}</h2></div>
        </div>
    }
}
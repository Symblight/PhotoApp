import React from 'react';
import {Row,Col,Grid, Panel} from 'react-bootstrap';
import * as api from '../../../etc/data.js';
import './Main.less';

export default class InfoPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            account: api.Account
        }
    }
    render(){
        return<Grid>
            <Panel>
            <Row>
                <Col xs={12} md={2}><img src={api.Account.avatar} className="avatar"/></Col>
                <Col xs={3} md={4}><h2>{api.Account.username}</h2></Col>
            </Row>
            </Panel>
        </Grid>
    }
}
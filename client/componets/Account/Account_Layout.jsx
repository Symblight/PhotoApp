import React from 'react'
import {Grid, Row,Col} from 'react-bootstrap';
import InfoPanel from './AccountPanel.jsx';
import PostList from './PostList.jsx';

import './Main.less';

export default class Account_layout extends React.Component{
    render(){
        return<Grid className="main_wrap">
            <Row>
                <Col><InfoPanel/></Col>
            </Row>
            <Row>
                <Col><PostList /></Col>
            </Row>
        </Grid>
    }
}
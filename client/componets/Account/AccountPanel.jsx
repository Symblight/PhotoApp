import React from 'react';
import {Row,Col,Grid} from 'react-bootstrap';

export default class InfoPanel extends React.Component{
    render(){
        return<Grid>
            <Row>
                <Col xs={12} md={2}>Avatar</Col>
                <Col xs={3} md={4}>Nick</Col>
            </Row>
        </Grid>
    }
}
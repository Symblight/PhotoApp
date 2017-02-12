import React from 'react';
import {Row,Col,Grid} from 'react-bootstrap'
import *as api from '../../../etc/data.js';
import './PostList.less';

export default class ListPost extends React.Component{
    render(){
        return <Grid >
            <Row className="post_content">
            {
                api.Account.posts.map((el,id) =>
                        <Col className="post" lg={4} md={4} >
                            <img src={el.src} className="img_content"/>
                        </Col>
                )
            }
            </Row>
        </Grid>
    }
}
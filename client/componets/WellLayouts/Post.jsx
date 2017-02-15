import React from 'react';
import {Panel, Col, Row, FormControl, Button} from 'react-bootstrap';
import * as api from '../../../etc/data.js';
import './Well.less';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            commit:'',
            commits:this.props.commits,
            Posts:api.Store
        }
    }

    handleChangeCommit(e){
        this.setState({commit: e.target.value});
    }

    handleAddCommit(){
        let com= this.state.commits;
                let _commit= {
                    username: 'Symbx',
                    commit: this.state.commit
                };
                com.push(_commit);
                this.setState({commits:com, commit:''});
    }

    render(){
        return <article className="well_w">
            <Panel className="wrapper">
                <div className="wr_r"><h4>{this.props.header}</h4></div>
                <Row>
                    <Col> <img src={this.props.img} className="img"/></Col>
                </Row>
                <Row className="show-grid">
                    {this.state.commits.map((c,id)=>
                       <div key={id}>
                           <Row>
                                <Col xs={12} md={1}>
                                    {c.username}
                                </Col>
                                <Col xs={4} md={4}>
                                    {c.commit}
                                </Col>
                           </Row>
                        </div>
                    )}
                    <Col xs={12} md={8}><FormControl type="text" className="commit_e" value={this.state.commit} onChange={this.handleChangeCommit.bind(this)}/></Col>
                    <Col xs={6} md={4}><Button onClick={this.handleAddCommit.bind(this)}>commit</Button></Col>
                </Row>
            </Panel>
        </article>
    }
}
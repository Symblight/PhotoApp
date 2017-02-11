import React from 'react';
import {Button, Panel, Form, FormGroup, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Sign.less';

export default class SignIn extends React.Component{
    render(){
        return<div className="wrap_content"> <h2>Welcome to Photo app in a React!</h2>
            <Panel >
                    <Form>
                        <FormGroup>
                            <FormControl type="text"></FormControl>
                            <FormControl type="password"></FormControl>
                            <LinkContainer to="/home"><Button>Sign in</Button></LinkContainer>
                        </FormGroup>
                    </Form>
            </Panel>
        </div>
    }
}
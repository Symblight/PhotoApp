import React from 'react'
import {Grid, Row,Col} from 'react-bootstrap';
import InfoPanel from './AccountPanel.jsx';
import PostList from './PostList.jsx';

import './Main.less';

export default class Account_layout extends React.Component{
    render(){
        return<div className="wrap_ac">
            <div className="container_l">
                <InfoPanel/>
                <PostList />
            </div>
        </div>
    }
}
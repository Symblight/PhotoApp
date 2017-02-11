import React from 'react';
import './Well.less';
import * as api from '../../../etc/data.js';
import Post from './Post.jsx';

export default class Well_layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            well_post:api.Store,
            commits:[]
        }
    }

    render(){
        return<div className="layout">
            {this.state.well_post.map(well =>
               <Post
                   key={well.id}
                   idPost={well.id}
                   header={well.header}
                   img={well.src}
                   commits={well.commits}
               />
            )}
        </div>
    }
}

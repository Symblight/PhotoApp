import React from 'react';
import * as api from '../../../etc/data.js';
import './Info.less';

class Avatar extends React.Component{
    render(){
        const {avatar} = this.props;

        return <div className="avatar_l">
            <div className="avatar_i">
                <img src={avatar} className="avatar"/>
            </div>
        </div>
    }
}

class MenuInfo extends React.Component{
    render(){
        const {userName}= this.props;
        const {firstName} = this.props;

        return<div className="menu_info">
            <div className="btn_name">
                <div className="login_i">
                    <h1 className="Login">{userName}</h1>
                </div>
                <div className="btn_layout">
                    <button>Edit account</button>
                </div>
            </div>
            <div className="post_i">
                <div className="item_i">count post: 4</div>
                <div className="item_i">followers: 2</div>
                <div className="item_i">following: 2</div>
            </div>
            <div className="name_i">
                <div className="item_nameInfo"><h4>{firstName}</h4></div>
            </div>
        </div>
    }
}

export default class InfoPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            account: api.Account
        }
    }
    render(){
        return<header className="container_i">
                <Avatar avatar={api.Account.avatar}/>
                <MenuInfo firstName={api.Account.first_name} userName={api.Account.username}/>
        </header>
    }
}
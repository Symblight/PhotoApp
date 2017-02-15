import React from 'react';
import *as api from '../../../etc/data.js';
import './PostList.less';

class Row extends React.Component {
    render() {
        const {cells} = this.props;
        return (
            <div className="row_flex">
                {cells.map( (c, k) =>
                    <div className="well_post well_a r_w" key={k}>
                        <article>
                            <div className="b_bord">
                                <div className="b_img">
                                    <img src={c.src} className="img_content"/>
                                </div>
                            </div>
                        </article>
                    </div>
                )}
            </div>
        )
    }
}

class Table extends React.Component {
    render() {
        const {rows} = this.props;
        return (
            <div className='list_post'>
                {
                    rows.map( (r, k) =>
                        <Row cells={r} key={k} />
                    )
                }
            </div>
        )
    }
}

export default class ListPost extends React.Component{
    constructor() {
        super();
        this.state = {
            data: api.Account.posts
        }
    }
    render() {
        function filter(objData) {
            let mas=[], buff=[],n=3;
            for(let i=0;i<objData.length;i++){
                if (i<n){
                    buff.push(objData[i]);
                } else {
                    mas.push(buff);
                    buff=[];
                    n+=3;
                    i--;
                }
            }
            if (buff.length>0)mas.push(buff);
            mas = AddLastArrayElement(mas);
            return mas;
        }

        function AddLastArrayElement(array) {
            let _array=array[array.length-1];
            let count = 3- _array.length;
            if(count!=0){
                for (let i=0;i<count;i++)
                    _array.push({});
                array[array.length-1]=_array;
            }else
                return array;

            return array;
        }
        return (
            <Table rows={filter(this.state.data)}/>
        )
    }
}
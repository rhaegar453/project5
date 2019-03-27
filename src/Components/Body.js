import React, {Component} from 'react';
import Bar from './Bar';

export default class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
            <Bar />
            </div>
        );
    }
}
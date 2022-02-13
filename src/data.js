import React from "react"
import "./Assignment.css";
import Assignment from "./count"
import { Component } from "react/cjs/react.production.min";

class Data extends Component{
    constructor(props){
        super(props);
            this.state = {
                lastName: "Aggarwal"
        };
    }
    render(){
        return(
            <Assignment lastName={this.state.lastName} />
        );
    }
}

export default Data;
import React from 'react';
import  ReactDOM from "react-dom";

import {ModalBox} from "./ModalBox";

export class ModalBuying extends React.Component{
     root = document.createElement("div");
     body=document.querySelector("body");

     componentDidMount(){
         this.body.appendChild (this.root);
     }

     componentWillUnmount(){
         this.body.removeChild(this.root);
     }

    render () {
        return ReactDOM.createPortal(<ModalBox session={this.props.session}
             handleCloseModalBox={this.props.handleCloseModalBox}/>,
             this.root);
    }
}
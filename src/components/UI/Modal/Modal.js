import React, { Component } from "react";
import classes from "./Modal.css";

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show){
            return true;
        }
    }
     componentWillUpdate(){
         console.log('[Modal] willUpdate')
     }
    render(){
        return(
            <div className = {classes.Modal}
    style={{
         transform: this.props.show ? 'translateY(0px)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0'
    }}>
        {this.props.children}
    </div>
        )
    }
}

export default Modal;
import React, { Component } from 'react'
import Styles from '../../index.css'
import Classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Auxiliary from '../../hoc/Auxiliary'

class Layout extends Component{
    state ={
        showSideDrawer: false 
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    showsideDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
         } )
    }

    
    render(){
        return(
            <Auxiliary className = {Styles.body}>
        <Toolbar clicked = {this.showsideDrawerHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={Classes.Content}>
            {this.props.children}
        </main>
    </Auxiliary>
        )
    }
}


export default Layout;
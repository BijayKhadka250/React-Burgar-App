import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Auxiliary>
            <Backdrop show={props.open} click ={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </Auxiliary>
    );
};

export default sideDrawer;
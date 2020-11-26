import classes from './NavigationItems.module.css';
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => 
(
    <ul className={classes.NavigationItems}>
        <NavigationItem active link="/">Birthday Today</NavigationItem>
        <NavigationItem link="/show_all">Show All</NavigationItem>
        <NavigationItem link="/create">Create</NavigationItem>
    </ul>
)

export default navigationItems;
import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import icon from '../../assets/images/birthday-cake.png';

const navBar = () =>
(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <img src={icon} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />Birthday Reminder
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <NavigationItems />
            </ul>
        </div>
    </nav>
);

export default navBar;
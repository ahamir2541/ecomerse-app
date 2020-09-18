import React from 'react';
import { Link } from 'react-router-dom'

const NavItem = ({itemLink, itemName}) => {
    return (
        <li className="nav-item">
            <Link to={itemLink} className="nav-link" > {itemName} </Link>
        </li>
    );
};

export default NavItem;
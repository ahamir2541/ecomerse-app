import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import { auth } from '../../Firebase/firebase'

const Navbar = ({ currentUser }) => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <Link to="/" className="navbar-brand" >Firebase</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <NavItem itemName="shop" itemLink='/shop' />
                        <NavItem itemName="Contact" itemLink='/contact' />
                        {
                            currentUser ?
                                <li onClick={() => auth.signOut()} className="nav-item">
                                    <div className="nav-link signOut">
                                        Sign Out
                                    </div>
                                </li>
                                :
                                <NavItem itemName="SignIn" itemLink='/signin' />
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStatetoProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStatetoProps)(Navbar);
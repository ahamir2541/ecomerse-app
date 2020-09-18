import React from 'react';
import CardPosts from '../CardPosts/CardPosts'
import { connect } from 'react-redux'

const Home = ({currentUser}) => {
    return (
        <div>
            <CardPosts/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentUser : state.user
    }
}

export default connect(mapStateToProps)(Home);
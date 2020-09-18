import React from 'react';
import CreateAccount from './CreateAccount'
import SignUp from './SignUp'

const SignIn = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-lg-5 col-md-6">
                    <CreateAccount/>
                </div>
                <div className="col-lg-7 col-md-6">
                    <SignUp/>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
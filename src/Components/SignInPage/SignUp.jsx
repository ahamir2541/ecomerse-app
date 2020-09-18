import React, {useState} from 'react';
import { auth, createUserProfileDocument } from '../../Firebase/firebase'

const SignUp = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = async e => {
        e.preventDefault()

        console.log(displayName, email, password, confirmPassword)

        if(password !== confirmPassword){
            alert('password not match ')
            return 
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfileDocument(user, {displayName})

            setDisplayName('')
            setEmail('')
            password('')
            confirmPassword('')

        }catch(error){
            console.error(error)
        }

    }

    return (
        <div className="mt-3">
            <h4>I don't have an account</h4>
            <span className="mt-3">Sign in with your email and password</span>
            <form onSubmit={submitHandler} >
                <div className="form-group mt-4">
                    <input 
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value) }
                    className="form-control mb-4 " 
                    type="text" placeholder="Display Name" />
                    <input 
                    value={email}
                    onChange={e => setEmail(e.target.value) }
                    className="form-control mb-4 " 
                    type="email" placeholder="Email" />
                    <input 
                    value={password}
                    onChange={e => setPassword(e.target.value) }
                    className="form-control mb-4 " 
                    type="password" placeholder="Password" />
                    <input 
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value) }
                    className="form-control mb-4 " 
                    type="password" placeholder="Confirm Password" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-dark text-uppercase btn-block " >sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
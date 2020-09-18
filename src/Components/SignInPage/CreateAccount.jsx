import React, {useState} from 'react';
import { signInWithGoogle, auth } from '../../Firebase/firebase'

const CreateAccount = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async e => {
        e.preventDefault()

        console.log( email, password )

        try{
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
            
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="mt-3">
            <h4>I already have an account</h4>
            <span className="mt-3">Sign in with your email and password</span>
            <form onSubmit={submitHandler} >
                <div className="form-group mt-4">
                    <input 
                     value={email}
                     onChange={e => setEmail(e.target.value) }
                    className="form-control mb-4 " 
                    type="email" 
                    placeholder="Email" />
                    <input 
                    value={password}
                    onChange={e => setPassword(e.target.value) }
                    className="form-control mb-4 " 
                    type="password" 
                    placeholder="Password" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-dark text-uppercase btn-block " >sign in</button>
                    </div>
                    <div className="col-md-6 mt-1">
                        <button onClick={signInWithGoogle} className="btn btn-primary text-uppercase btn-block " > signin with google </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateAccount;
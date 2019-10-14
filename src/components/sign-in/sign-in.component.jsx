import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {

    const initialState = {
        email: '',
        password: ''
    }

    const [state, setState] = useState(initialState);

    const handleChange = event => {
        const { value, name } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setState(initialState);
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with yout email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type="email"
                    label='Email'
                    value={state.email}
                    handleChange={handleChange}
                    required />
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={state.password}
                    handleChange={handleChange}
                    required />
                <div className='buttons'>
                    <CustomButtom type="submit">Sign In</CustomButtom>
                    <CustomButtom onClick={SignInWithGoogle}>Sign In with Google</CustomButtom>
                </div>
            </form>
        </div>
    )

}

export default SignIn;
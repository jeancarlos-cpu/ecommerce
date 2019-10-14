import React, { useState } from 'react';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import CustomButtom from '../custom-button/custom-button.component';

const SignUp = () => {

    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [state, setState] = useState(initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });
            setState(initialState);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <div className='sign-up'>
            <h2 className='sign-up'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form ckassName='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    label='Display Name'
                    value={state.displayName}
                    onChange={handleChange}
                />
                <FormInput
                    type='email'
                    name='email'
                    label='Email'
                    value={state.email}
                    onChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    value={state.password}
                    onChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    label='confirm Password'
                    value={state.confirmPassword}
                    onChange={handleChange}
                />
                <CustomButtom type='submit'>SIGN UP</CustomButtom>
            </form>
        </div>
    )

}

export default SignUp;
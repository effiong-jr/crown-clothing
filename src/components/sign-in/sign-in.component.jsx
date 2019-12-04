import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: "", password: ""});
    }
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        type="text" 
                        name="email" 
                        label="Email"
                        value={this.state.email} 
                        required 
                    />

                    <FormInput 
                        handleChange={this.handleChange}
                        type="password" 
                        name="password" 
                        label="Password"
                        value={this.state.password} 
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn
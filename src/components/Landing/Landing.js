import React, {Component} from 'react'
import './Landing.css'

export default class Landing extends Component {
    state = {
        usernameInput: '',
        emailInput: '',
        passwordInput: ''
    }
    render() {
        return (
            <div className='Landing'>
                <div className='left'>
                    <div className='logo'>
                        <div>$</div>
                    </div>
                </div>
                <div className='right'>
                <div className="inputs-container">
                    <input type="text" placeholder='username'/>
                    <input type="text" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Register</button>
                    <button>Login</button>
                </div>
                </div>
            </div>
        )
    }
}
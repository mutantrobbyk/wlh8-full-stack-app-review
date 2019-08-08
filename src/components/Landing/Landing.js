import React, {Component} from 'react'
import './Landing.css'
import axios from 'axios'
import {setUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Landing extends Component {
    state = {
        usernameInput: '',
        emailInput: '',
        passwordInput: ''
    }
    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }
    registerUser = () => {
        const {usernameInput: username, emailInput: email, passwordInput: password} = this.state
        axios.post('/auth/register', {username, email, password}).then(res => {
            const {username, email} = res.data.user
            this.props.setUser({username, email})
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Email already in Use')
        })
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
                    <input onChange={e => this.handleChange(e, 'usernameInput')} type="text" placeholder='username'/>
                    <input onChange={e => this.handleChange(e, 'emailInput')} type="text" placeholder='email'/>
                    <input onChange={e => this.handleChange(e, 'passwordInput')} type="password" placeholder='password'/>
                    <button onClick={this.registerUser}>Register</button>
                    <button>Login</button>
                </div>
                </div>
            </div>
        )
    }
}
export default connect(null, {setUser})(Landing)
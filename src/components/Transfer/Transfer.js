import React, {Component} from 'react'
import './Transfer.css'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

export default class Transfer extends Component {
    state = {
        account: 'Savings',
        amount: 0,
        transactionType: 'Deposit'
    }
    handleChange = (prop, e) => {
        this.setState({[prop]: e.target.value})
    }
    render() {
        return (
            <div className='Transfer'>
                <Dropdown changeFn={this.handleChange} prop='transactionType'>
                    <option value='deposit'>Deposit</option>
                    <option value='withdraw'>Withdraw</option>
                </Dropdown>
                <Dropdown changeFn={this.handleChange} prop='account'>
                    <option value="savings">Savings</option>
                </Dropdown>
                <input onChange={e => this.handleChange(e)}type="text"/>
                <Link to='/dashboard'>
                <button>Cancel</button>
                </Link>
                <button>Submit</button>
            </div>
        )
    }
}
import React, {Component} from 'react'
import './Transfer.css'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

export default class Transfer extends Component {
  state = {
    account: '',
    amount: '',
    transactionType: ''
  }
  render() {
    return (
      <div className='Transfer'>
        <Dropdown>
          <option>Deposit</option>
          <option>Withdraw</option>
        </Dropdown>
        <Link to='/dashboard'>
          <button>Cancel</button>
        </Link>
        <button>Submit</button>
      </div>
    )
  }
}

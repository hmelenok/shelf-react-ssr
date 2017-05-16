import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FirstPage.css'

export default class FirstPage extends Component {
  render() {
    return (
      <div className='bold'>
        <h2>First Page</h2>
        <Link to={'/second'}>Second</Link>
      </div>
    )
  }
}

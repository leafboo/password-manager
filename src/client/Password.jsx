import React from 'react'
import PasswordCSS from './styles/Password.module.css'

export default function Password(props) {
  return (
    <div className={PasswordCSS['password-container']}>
      <div>
        <img src={props.webImage} alt="Website image." className={PasswordCSS['image']}/>
      </div>
      <div>
        <div>email: {props.email}</div>
        <div>username: {props.username}</div>
        <div>password: {props.password}</div>
      </div>
    </div>
  )
}
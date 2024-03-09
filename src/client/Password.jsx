import React from 'react'
import PasswordCSS from './styles/Password.module.css'

export default function Password(props) {
  return (
    <div>
      <img src={props.webImage} alt="" />
      <div>email: {props.email}</div>
      <span>username: {props.username}</span>
      <div>password: {props.password}</div>
    </div>
  )
}
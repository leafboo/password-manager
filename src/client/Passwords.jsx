import React from "react"
import Password from "./Password.jsx"
import PasswordsCSS from './styles/Passwords.module.css'
import accountsData from '../database/data.js'

export default function Passwords() {

  const AccountsElement = accountsData.map(account => 
    <Password  webImage={account.logo}
               email={account.email}
               username={account.username}
               password={account.password}
      
      />
  )

  return (
    <div>
      {AccountsElement}
    </div>
  )
}
import React from "react"
import Password from "./Password.jsx"
import PasswordsCSS from './styles/Passwords.module.css'

export default function Passwords() {
  return (
    <div>
      <Password webImage={'https://static.vecteezy.com/system/resources/thumbnails/012/871/371/small/google-search-icon-google-product-illustration-free-png.png'}
                email={'janjancaranguian@gmail.com'}
                username={'leafboo'}
                password={'d33zNutz'}
      
      />
      <Password webImage={'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png'}
                email={'janjancaranguian@gmail.com'}
                username={'janromel'}
                password={'wubalubadubdub'}
      
      />
      <Password webImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'}
                email={'janjancaranguian@gmail.com'}
                username={'coldsalami'}
                password={'asdd12Ecx'}
      
      />
    </div>
  )
}
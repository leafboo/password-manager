import React from 'react' 
import AddRowCSS from './styles/AddRow.module.css'

export default function AddRow() {
  return (
    <div className={AddRowCSS['add-row-container']}>
      <form action="">
      <label htmlFor="">website url</label>
        <div>
          <input type="text" name="" id="" />
        </div>

      <label htmlFor="">logo</label>
        <div>
          <input type="text" name="" id="" />
        </div>

      <label htmlFor="">email</label>
        <div>
          <input type="text" name="" id="" />
        </div>

      <label htmlFor="">username</label>
        <div>
          <input type="text" name="" id="" />
        </div>

      <label htmlFor="">password</label>
        <div>
          <input type="text" name="" id="" />
        </div>
        
        <div>
          <button>Add</button>
        </div>
      </form>
      
    </div>
  )
}
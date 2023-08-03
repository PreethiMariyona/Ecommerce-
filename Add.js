import React from 'react'
import { FaPlus } from 'react-icons/fa'
 

const Add = ({apple,setApple,handleSubmit}) => {
  return (
    <form className='cat' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>add item</label>
        <input 
        autoFocus
        id='addItem'
        type='text'
        placeholder='add item'
        required
        value={apple}
        onChange={(e) =>setApple(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add'
        ><FaPlus/></button>
     
    </form>
  )
}

export default Add
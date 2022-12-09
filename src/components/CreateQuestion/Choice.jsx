import React from 'react'
import './Choice.css'
import Button from '../Button/Button'

const Choice = ({text,icon}) => {
  return (
    <div className='choice-container'>
        <p>{text}</p>
        <div className="delete-btn-container">
            <Button className="delete-btn" color="var(--red)">Delete</Button>
        </div>

        <div className='delete-icon'>
         <i  class={icon} aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Choice;

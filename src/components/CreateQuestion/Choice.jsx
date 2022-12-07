import React from 'react'
import './Choice.css'
import Button from '../Button/Button'

const Choice = ({text,icon}) => {
  return (
    <div className='choice'>
        <p>{text}</p>
        <div className="btn">
            <Button className="delete" color="var(--red)">Delete</Button>
        </div>

        <div className='delete-icon'>
         <i  class={icon} aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Choice;

import React from 'react'
import Button from '../../Button/Button'
import { Badge } from '@tremor/react'
import './Student.css'
const Student = ({name, surname, school, stdNum, qstns, numPrac, succRate}) => {
  return (
    <div className='student'>
    
    <h3>{name}</h3>
    <h3>{surname}</h3>
    <h3>{school}</h3>
    <h3>{stdNum}</h3>
    <h3>{qstns}</h3>
    
    <Badge size="lg" color="red" text="16" />
    <Badge size="lg" color="green" text="+97%" />
      
    </div>
  )
}


Student.defaultProps = 
{
    name: "Voldi",
    surname: "Muyumba",
    school: "Barnato",
    stdNum: '222002283',
    qstns:  33,
    numPrac: 4,
    succRate: '+95%'

}

export default Student

import React from 'react'

const Button = ({title, color, iconName}) => {
  return (
    <button style={{backgroundColor: color}}> 
       <i className={iconName} />  {title}
    </button>
  )
}


Button.defaultProps = 
{
    title : "title",
    color : 'red',
    iconName: 'fa fa-homie'
}


export default Button

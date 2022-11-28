import './Button.css'

const Button = (props) => {
  return (
    <button style= {{backgroundColor: props.color}}> 
      {props.children}
    </button>
  )
}


Button.defaultProps = 
{
   color: "var(--green)"
}

export default Button

import './Button.css'

const Button = (props) => {
  console.log(props)
  return (
    <button style= {{backgroundColor: props.color}} className={props.className}> 
      {props.children}
    </button>
  )
}


Button.defaultProps = 
{
   color: "var(--yellow)",
   lable: "name"
}

export default Button

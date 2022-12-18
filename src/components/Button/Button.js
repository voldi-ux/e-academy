import './Button.css'

const Button = (props) => {
  
  return (
    <button style={{ backgroundColor: props.color }} className={props.className + " btn-1"}>
      {props.children}
    </button>
  );
}


Button.defaultProps = 
{
   color: "var(--yellow)",
   lable: "name"
}

export default Button

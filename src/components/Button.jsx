// ✅ Props allow components to be reusable and dynamic.
// ✅ Props are read-only (they cannot be changed inside the child component).
// ✅ Use destructuring to simplify prop usage.
// ✅ The children prop lets you pass JSX inside components.





const Button = (props)=>{
    return(
        <button>{props.text}</button>
    )
}

export default Button
// ✅ Props allow components to be reusable and dynamic.
// ✅ Props are read-only (they cannot be changed inside the child component).
// ✅ Use destructuring to simplify prop usage.
// ✅ The children prop lets you pass JSX inside components.





const Button = ({text})=>{
    return(
        <button >{text}</button>
    )
}

export default Button
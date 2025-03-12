import Button from "./Button"
import Hero from "./Hero"
import './navbar.css'
const Navbar = ()=>{
    const signUp = ()=>{
        alert('signingh up...')
    }

    return(
        <div className="navbar">
            <h1>Logo</h1>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/products">Products</a>
            </div>
            <Button go='Get started now' submit={signUp}/>
        </div>
    )
}

export default Navbar
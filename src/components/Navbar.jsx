import Button from "./Button"
import Hero from "./Hero"
const Navbar = ()=>{
    return(
        <div>
            <h1>Logo</h1>
            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <Button />
            <Hero />
        </div>
    )
}

export default Navbar
import Button from "./Button";
import Input from "./INput"

const Hero = () => {
    const explore = ()=>{
        alert('exploring...')
    }
    return (
        <div>
            <h1>welcome Home</h1>
            <Input />
            <Button go='Explore our products' submit={explore}/>
        </div>
    )
}

export default Hero;
import Button from "./Button";
import Input from "./INput"

const Hero = ({text}) => {

    return (
        <div>
            <h1></h1>
            <Input />
            <Button go={text} />
        </div>
    )
}

export default Hero;
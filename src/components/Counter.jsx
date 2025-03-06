// useState() useEffect() useRef()
// state management
import React, { useState } from 'react'

const Counter = () => {
                                      // default value  
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({
        name: 'james',
        age: 5
    })

    const obj = {name:'lo', age:9}
    const obj2 = { address: 'Nigeria', age: 90, ...obj}
    console.log(obj2);
    

    const handleClick = ()=>{
        setCount(prev => (prev + 1))
        setUser(prev => ({...prev, age: prev.age + 1, name:'souhaiu'}))
    }
    
  return (
    <div>
        <button onClick={handleClick}>Count {count}</button>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
    </div>
  )
}

export default Counter
import { useState } from "react";
const useSignup= ()=>{
    const [isLoading, setIsLoading] = useState(false)
    const baseUrl = 'http://localhost:4003/api'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const handleInput = (e)=>{
        const {name, value}= e.target
        setFormData(prev => ({...prev, [name]: value}))
        // console.log(formData);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await fetch(`${baseUrl}/auth/sign-up`, {
                method: 'POST', 
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    return {
        handleInput,
        handleSubmit,
        isLoading
    }
}

export default useSignup
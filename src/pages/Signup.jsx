import { useState } from 'react'
const Signup = () => {
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
        console.log('signing up...');
        e.preventDefault()
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
            console.log('DONE!')
        }
    }

  return (
    <div style={{padding: '4rem 2rem'}}>
        <div className="signup-container" >
            <form  onSubmit={handleSubmit} >
                <div >
                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput}  type="email" name="email" id="email" placeholder='example@gmail.com' required/>
                </div>
                <div >
                    <label htmlFor="name">Name</label>
                    <input onChange={handleInput}  type="text" name="name" id="name" placeholder='John doe' required/>
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input onChange={handleInput}  type="password" name="password" id="password" placeholder='******' required/>
                </div>

                <button >Signup</button>
            </form>
        </div>
    </div>
  )
}

const styles = {
    form: {
        width: '90vw',
        maxWidth: '400px',
        margin: 'auto',
        border: '1px solid',
        borderRadius: '8px',
        padding: '1rem'
    },
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        margin: '.5rem 0'
    },
    formInput: {
        padding: '.5rem 1rem',
        borderRadius: '5px',
        border: '1px solid'
    },
    formButton: {
        background: 'black',
        color: 'white',
        padding: '.5rem 1rem',
        borderRadius: '5px',
        border: 'none'
    }
}

export default Signup
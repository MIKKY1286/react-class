import Button from './components/Button'
import ProfileCard from './components/ProfileCard'

const App = () => {
  const signup = ()=>{
    alert('signup')
  }
  return (
    <> 
       {/* <Button text='Welcome' />
       <Button text='Login'/>
       <Button text='Signup'/>
       <Button text='Move on'/> */}
       <ProfileCard image='https://images.pexels.com/photos/1427889/pexels-photo-1427889.jpeg?auto=compress&cs=tinysrgb&w=600' name='Ola bim' link='https://www.google.com'/>

       <ProfileCard name='ALice band' age='6' email='alice@gmail.com' link='https://bbc.com'/>
       
       <ProfileCard name='Paul idf' age={9} email='paul@gmail.com' link='https://punch.com'/>
   </>
  )
}


export default App 
import { useEffect, useRef, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './signUp.css'
const SignUp = () => {
    const email = useRef()
    const password = useRef()
    const [showHome,setShowHome] = useState(false)
    const localSignUp = localStorage.getItem("SignUp")
    const history = useNavigate()
    useEffect(()=>{
     if (localSignUp){
        setShowHome(true)
     }
     if(showHome){
        history('/Home')
       }
    })
    const handelClick = () =>{
        if(email.current.value && password.current.value){
        console.log(email.current.value,password.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("SignUp",email.current.value)
        alert("Account created successfully")
        window.location.reload()
        }else{
            alert("Invalid Email Or Password")
        }
    }
    return ( 
 <>
        
 <div className="form">
    <div className="box">
    <h2>SignUp</h2>
 <p>   <input type="text" ref={email} placeholder="Email"/></p>
  <p>  <input type="text" ref ={password} placeholder="Password"/></p>
     <p> <Button onClick={handelClick}>Sign in</Button></p>
      <p>Create your Account <Link to="/" >Sign In</Link></p>
    </div>
     
 </div>
 
 </>
     );
}
 
export default SignUp;
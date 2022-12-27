import { useEffect, useRef, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Button } from 'reactstrap';
const SignIn = () => {
  ///signin using Local storage
    const email = useRef()
    const password = useRef()
    const [showHome,setShowHome] = useState(false)
    const signIn = localStorage.getItem("SignIn")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    const history = useNavigate()
  useEffect(()=>{
if(signIn){
setShowHome(true)

}
if(showHome){
 history('/Home')
}
  })
    const handelClick = () =>{
        localStorage.setItem("SignIn",email.current.value)
        if(localEmail === email.current.value && localPassword === password.current.value){
        alert("SignIn successfully")
        window.location.reload()
        }else{
          alert("Invalid Email Or Password")
        }
    }
    return ( 
 <>
       
 <div className="form">
 <div className="box">
 <h1>SignIn</h1>
   <p> <input type="text" ref={email} placeholder="Email"/></p>
   <p> <input type="text" ref ={password} placeholder="Password"/></p>
     <p> <Button onClick={handelClick}>Sign Up</Button><br /></p>
     <p>Create your Account <Link to="/signUp" >Sign Up</Link></p>
 </div>
 </div>
 
 </>
     );
}
 
export default SignIn;
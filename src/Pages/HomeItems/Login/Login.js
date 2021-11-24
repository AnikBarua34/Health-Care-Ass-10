import React from 'react';
import { Form,Button, Row, Col} from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useContextbase from '../../hooks/useContextBase';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Card } from 'react-bootstrap';




import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import loginImg from '../../../Images/login-registration/login.jpg';
import registerImg from '../../../Images/login-registration/register.jpg';
import './Login.css';


const Login = () => {
    const{signInWithGoogle,user}=useContextbase();

// redirecting from login page 
const location =useLocation();
const history =useHistory();


const handleGoogleLogin=()=>{
  signInWithGoogle()
  .then(result =>{
    console.log(result.user)
    history.push(location.state?.from || "/home")
})

}
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [error,setError] =useState('')
    const [isLogin,setIsLogin]=useState(false);




    const auth = getAuth();


    // handle registration 
    const handleRegistration = (e)=>{
      e.preventDefault();
      console.log(email,password)

      if(!/(@)/.test(email)){
      setError('Oops ! You Miss @ ! Please Enter @ in Email')
      return;
      }
      if(email.length < 6){
        setError('Enter a Valid Email Address')
        return;
      }
      if(password.length < 6){
        setError('Password should be 6 Characters or long.')
        return;
      }
      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setError('Password Must contain two upper Case')
      return;
      }
  

      isLogin ? processLogin(email,password): registerNewUSer(email,password); 
    }

    // login processing 
    const processLogin =(email,password)=>{
      signInWithEmailAndPassword(auth, email, password)
      .then(result=>{
        const user = result.user;
        console.log(user);
        setError('');
        history.push(location.state?.from || "/home")
      })
      .catch(error=>{
        setError(error.message)
      })
    }

const handleEmailChange = (e)=>{
setEmail(e.target.value)
}

const handlePasswordChange = (e)=>{
  setPassword(e.target.value)
}



const toggleLogin=(e)=>{
setIsLogin(e.target.checked)
}




const registerNewUSer=(email,password)=>{
  createUserWithEmailAndPassword(auth, email, password) 
      .then(result=>{
        const user= result.user
        console.log(user);
        setError('');
        history.push(location.state?.from || "/home")
      })
      .catch(error =>{
        setError(error.message)
      })
}
    
    return (
      <div className="mt-3 pt-3 text-dark">
          <div className="login-registration-container m-3 p-3">

          <Row xs={1} md={2} lg={2} className="g-5 p-5">





          
      {/* form colum    */}
  <Col className="">
    <Card className="p-3" border="warning"> 

      
{/* form */}
<div>
<h2 className="text-primary fw-bold" >Please {isLogin ? 'Login to your Account': 'Resister an new Account'}</h2>


<Form onSubmit={handleRegistration} className="mt-3">
<Row className="mb-3">
<Form.Group className="mx-auto" as={Col} md="4" lg="6" controlId="validationCustom01">
<Form.Label>Email</Form.Label>
<Form.Control
className="border border-warning"
onBlur={handleEmailChange}
required
type="text"
placeholder="Enter Your Email"
/>
</Form.Group>


</Row>
<Row className="mb-3">
<Form.Group className="mx-auto" as={Col} md="6" lg="6" controlId="validationCustom03">
<Form.Label>Password</Form.Label>
<Form.Control className="border border-warning" onBlur={handlePasswordChange} type="password" placeholder="password" required />
<Form.Control.Feedback  type="invalid">
Please provide a valid password.
</Form.Control.Feedback>
</Form.Group> 
</Row>
<div className="text-warning m-2">{error}</div>



{/* Dynamic Login & Registration  */}
<Button type="submit">{isLogin? 'Login':'Register'}</Button> <br />
{
 user.email? <p>Login SuccessFull !! Wellcome {user.email} <Link className="text-primary fw-bold"  to ="/home"> Back To Home</Link></p>  
 : <p> </p>
}
<div className="form-check mt-5 ">
<input onChange={toggleLogin} className="ms-3 form-check-input border border-danger shadow shadow-4" type="checkbox" value="" id="gridCheck1"/>
<label className="form-check-label fw-bold" htmlFor="gridCheck1">

{isLogin? 'New User? click here to Register':'Already Registered ? Click here to Login'}
</label>
</div>
</Form>

<div  className="m-3">.......................Or......................</div>

 <div className="button">
<button onClick={handleGoogleLogin} className="btn btn-dark m-3"><FcGoogle /> Login with Google</button>
</div>


</div>
     
    </Card>
  </Col>

{/* img colum  */}

  <Col className="">
    <Card className="" border="warning"> 

      <Card.Body>

      
 {
   isLogin ? 
   <Col className="card-body">
    <Card className="" border="warning"> 
      <Card.Img style={{width:350}} src={loginImg} />
    </Card>
  </Col>
    
   : 
   <Col className="card-body">
   <Card className="" border="warning"> 
     <Card.Img style={{width:350}} src={registerImg} />
   </Card>
 </Col>
 }

      </Card.Body>
    </Card>
  </Col>

  

          {/* image  */}

          </Row>
          </div>
          
      </div>
  );
};

export default Login;
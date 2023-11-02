import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../Redux/Actions/AuthActions"


  const Login = () => {
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
   const handleLogin = (a)=>{
    a.preventDefault()
    dispatch(login({email,password},navigate))

   }
   const FormStyle ={
    borderRadius:'10px',
    padding: '0.75rem',
    backgroundColor:' #f36931',
    border: '1px solid #e9e9e9',
    color:'#002C3E',
    fontWeight: 'bold',
    fontSize:'1rem',
    height:"70px",
    }
    const buttonStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: ' 2px solid #002C3E',
      backgroundColor: '#f36931',
      color: '#ffffff', 
      borderRadius:'7px',
      height:'55px',
      width:'200px',
      fontWeight: '600',
      fontSize: '1rem'
    }
  
  
  return (
    <div className='bgcolor2'>
    <div className='container'>
    <div className='row align-items-center'>
    <div className='col mt-5'>
</div>
<div className='col mt-5'>
  <h1>Nous sommes ravis de vous revoir ! 👋</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione fugit id molestias, deleniti, veniam eius ab odit provident dolor dignissimos recusandae sint? Architecto fugiat officiis, accusamus dolor excepturi sit.</p>
  <Form className=''>  




<Form.Group className='my-4' controlId="exampleForm.ControlInput1">
  <Form.Label >Adresse e-mail</Form.Label>
  <Form.Control onChange={(e)=>setEmail(e.target.value)} className='custom-input' type="email" placeholder="Entrer votre Adresse e-mail" style={FormStyle}/>
</Form.Group>


<Form.Group className='my-4' controlId="exampleForm.ControlInput1">
  <Form.Label >Mot de passe</Form.Label>
  <Form.Control onChange={(e)=>setPassword(e.target.value)} className='custom-input' type="password" placeholder="Entrer votre Mot de passe" style={FormStyle}/>
</Form.Group>
<div className='d-flex justify-content-center my-5'>
<Button onClick={(e)=>handleLogin(e)} style={buttonStyles} type="submit"> S'inscrire </Button>
</div>
</Form>
      


    </div>
    </div>
    </div>
    </div>
  )
}

export default Login



{/* <div className='container text-white'> */}
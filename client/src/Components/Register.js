import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
// import logo from 'C:\Users\aziz jr\Desktop\MernProject-main/client/src/Assets/logoCarea.svg'
import './Posts/CustomForm.css';


import { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register } from '../Redux/Actions/AuthActions';


const FormStyle ={
  borderRadius:'10px',
  padding: '0.75rem',
  backgroundColor:' #f3f6f9',
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
    backgroundColor: '#002C3E',
    color: '#ffffff', 
    borderRadius:'7px',
    height:'55px',
    width:'200px',
    fontWeight: '600',
    fontSize: '1rem'
  }


  const Register = () => {
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleRegister = (a) =>{
    a.preventDefault()
    
    dispatch(register({name,email,password},navigate))

  }

  
  
  
  return (
    <div className='bgcolor2'>
    <div className='container'>
    <div className='row'>
   <div className='aspetVerre'>
<div className='col-lg-6 offset-lg-3 my-5 align-items-center'>
<div className='d-flex flex-nowrap justify-content-center flex-column align-content-center align-items-center text-center'>
{/* <Image style={{ width:'180px'}} src={logo} ></Image> */}
  <h1 className='title mt-3'>Join us today 👋</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione fugit id molestias, deleniti, veniam eius ab odit provident dolor dignissimos recusandae sint? Architecto fugiat officiis, accusamus dolor excepturi sit.</p>

</div>

     
      <Form className=''>  

          <Form.Group className='my-4' controlId="exampleForm.ControlInput1">
            <Form.Label >Nom & Prénom</Form.Label>
            <Form.Control onChange={(e)=>setName(e.target.value)} className='custom-input' type="text" placeholder="Entrer votre Nom et Prénom" style={FormStyle}/>
          </Form.Group>



          <Form.Group className='my-4' controlId="exampleForm.ControlInput1">
            <Form.Label >Adresse e-mail</Form.Label>
            <Form.Control onChange={(e)=>setEmail(e.target.value)} className='custom-input' type="email" placeholder="Entrer votre Adresse e-mail" style={FormStyle}/>
          </Form.Group>


          <Form.Group className='my-4' controlId="exampleForm.ControlInput1">
            <Form.Label >Mot de passe</Form.Label>
            <Form.Control onChange={(e)=>setPassword(e.target.value)} className='custom-input' type="password" placeholder="Entrer votre Mot de passe" style={FormStyle}/>
          </Form.Group>
     <div className='d-flex justify-content-center my-5'>
         <Button onClick={(e)=>handleRegister(e)} style={buttonStyles} type="submit"> S'inscrire </Button>
     </div>
    </Form>

   </div>

    </div>
    </div>
    </div>
    
    </div>
  )
}

export default Register

// style={{backgroundColor: "red"}}

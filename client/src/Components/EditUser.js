import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import profile from '../Assets/profile.png'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"

const EditUser = () => {

const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getOneUser(id))
},[])

  const oneUser = useSelector(state=>state.AuthReducer.oneUser)

  useEffect(()=>{
    setName(oneUser.name)
  },[oneUser])

  const [name,setName] = useState(oneUser.name)

  const navigate = useNavigate()
  
  const handleUpdate=(a)=>{
    a.preventDefault()
    dispatch(updateUser({name},id,navigate))
  }
  return (
    <div className=''>
      <Card.Img
        src={profile}
        className="rounded-circle border border-dark-2 border-4"
        style={{ width: '100px', height: '100px' }}
        alt="Profile Image"/>
      <Form className='container centered-form py-4'>
     
      <Form.Group className="mb-4 " controlId="formBasicEmail">
        <Form.Label style={{ fontSize: '13px',fontWeight: "600",paddingLeft:"16px"  }} className="lg" >First & Last Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} className="rounded-5 p-3 cls-placeholder"  type="text" placeholder="Edit your name" />
      </Form.Group>
      
      <Button onClick={(e)=>handleUpdate(e)}  className="rounded-5 pl-3 mr-3" variant="primary" type="submit">
      Submit
      </Button>
      
      </Form>

      </div>



  )
}

export default EditUser
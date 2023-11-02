import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { current, getOneUser, updateProfile, updateUser } from "../Redux/Actions/AuthActions"

const EditProfile = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(current())
  },[])

  const user = useSelector(state=>state.AuthReducer.user)


  const [name,setName] = useState(user.name)
  const [phone,setPhone] = useState(user.phone)

  useEffect(()=>{
    setName(user.name)
  },[user])

  

  const navigate = useNavigate()
  
  const handleUpdate=(a)=>{
    a.preventDefault()
    dispatch(updateProfile({name},user._id,navigate))
  }
  return (
    <div className=''>
      
      <Form className='container centered-form py-4'>
     
      <Form.Group className="mb-4 " controlId="formBasicEmail">
        <Form.Label style={{ fontSize: '13px',fontWeight: "600",paddingLeft:"16px"  }} className="lg" >Nom d'utilisateur</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} className="rounded-5 p-3 cls-placeholder"  type="text" placeholder="Nom d'utilisateur" />
      </Form.Group>
      
      <Form.Group className="mb-4 " controlId="formBasicEmail">
        <Form.Label style={{ fontSize: '13px',fontWeight: "600",paddingLeft:"16px"  }} className="lg" >Numéro du téléphone</Form.Label>
        <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} className="rounded-5 p-3 cls-placeholder"  type="text" placeholder="Numéro du téléphone" />
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)}  className="rounded-5 pl-3 mr-3" variant="primary" type="submit">
      Submit
      </Button>
      </Form>

      </div>



  )
}

export default EditProfile
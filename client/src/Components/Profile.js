import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { current, deleteProfile } from '../Redux/Actions/AuthActions'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import profile from '../Assets/profile.png'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { Form, Link, useNavigate } from 'react-router-dom';
import MyPosts from './Posts/MyPosts';

const Profile=()=>{


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(current())
  },[])
  const user = useSelector(state=>state.AuthReducer.user)
  const navigate =useNavigate()


  return(
      <div>
        {

            user && 
            <>
            <div className='styleProfile'>
            <Card.Img
        src={profile}
        className="rounded-circle border border-dark-2 border-4"
        style={{ width: '100px', height: '100px' }}
        alt="Profile Image"/>
            <Card.Title>{ user.name}</Card.Title>
            <Card.Text>{ user.email}</Card.Text>
            <Card.Text>{ user.phone}</Card.Text>
           
          
             


</div>
<div className='pospos'>
          <div className='btnCard'>
      
      <Button variant="outline-success" as={Link} to="/updateProfile">
          <FontAwesomeIcon icon={faPen} />
      </Button>
       
        <>
        <Button onClick={handleShow} variant="outline-danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'red'}}>Supprimer le compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>En effectuant cette action votre compte et vos annonces seront supprimées définitivement !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button onClick={() => {dispatch(deleteProfile(user._id,navigate));handleClose()}}  variant="danger" >
          Supprimer mon compte
          </Button>
        </Modal.Footer>
        </Modal>

            </>
          </div>
          </div>
  <MyPosts/>
  </>
      }

    </div>
  )
}


export default Profile
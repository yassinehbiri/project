import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus, faCirclePlus,faCircleXmark,faHouse,faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Actions/AuthActions';
import {buttonStyles,buttonStyles2,buttonStyles3,iconStyles} from './Styles'

const NavUser = () => {
    const token =localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user) 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
   

   return (
        
      <Navbar   expand="lg " fixed="top" sticky="top" className='shadow-sm' style={{ height: '80px', backgroundColor:'#dfdfdf' }}>
      <Container fluid > 
        <Link to ="/"><img  style={{ width:'120px'}} src="/Capture2.png" ></img></Link>
        {/* <Navbar.Brand src=Capture.PNG} href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScrol>  
          </Nav>


          <Form className="d-flex align-items-center mx-4 ">
            {/* Home */}
          <Nav.Link  style={buttonStyles} className='me-auto' as={Link}  to ="/"><FontAwesomeIcon icon={faHouse} style={iconStyles} /> Home </Nav.Link>
          



            {
              token && user?.role =='admin'?
              <>
               <Nav.Link  style={buttonStyles} className='me-auto' as={Link}  to ="/MyPosts"><FontAwesomeIcon icon={faUser} style={iconStyles}/>MyPosts</Nav.Link>
              <Nav.Link  style={buttonStyles} className='me-auto' as={Link}  to ="/Profile"><FontAwesomeIcon icon={faUser} style={iconStyles}/>Profile</Nav.Link>
              <Nav.Link  style={buttonStyles} className='me-auto' as={Link}  to ="/ListUsers"><FontAwesomeIcon icon={faUsers} style={iconStyles}/>Users</Nav.Link>
              <Button as={Link}  to ="/AddPost" style={buttonStyles3}><FontAwesomeIcon icon={faCirclePlus}  style={iconStyles}/>Publier une annonce</Button>
              <Button as={Link}  to ="/ListPost" style={buttonStyles3}><FontAwesomeIcon icon={faCirclePlus}  style={iconStyles}/>Posts</Button>
              <Button onClick={()=>{dispatch(logout(),navigate('/'))}} style={buttonStyles2}><FontAwesomeIcon icon={faCircleXmark} style={iconStyles}/>Se déconnecter</Button>

              </>
              :
              token&& user?.role =='client'?
                <>
              <Nav.Link  style={buttonStyles} className='me-auto' as={Link}  to ="/MyPosts"><FontAwesomeIcon icon={faUser} style={iconStyles}/>MyPosts</Nav.Link>
              <Nav.Link  style={buttonStyles} className='me-auto' as={Link}  to ="/Profile"><FontAwesomeIcon icon={faUser} style={iconStyles}/>Profile</Nav.Link>
              <Button as={Link}  to ="/AddPost" style={buttonStyles3}><FontAwesomeIcon icon={faCirclePlus}  style={iconStyles}/>Publier une annonce</Button>
              <Button as={Link}  to ="/ListPost" style={buttonStyles3}><FontAwesomeIcon icon={faCirclePlus}  style={iconStyles}/>Posts</Button>
              <Button onClick={()=>{dispatch(logout(),navigate('/'))}} style={buttonStyles2}><FontAwesomeIcon icon={faCircleXmark} style={iconStyles}/>Se déconnecter</Button>

              </>

             :
              <>

              <Button as={Link}  to ="/Login" style={buttonStyles2}><FontAwesomeIcon icon={faRightToBracket} style={iconStyles}/>Se connecter</Button>
              <Button as={Link} to="/Register" style={buttonStyles} variant="primary"><FontAwesomeIcon icon={faUserPlus} style={iconStyles} /> S'inscrire</Button>
              </>
            }
            
            

          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    
    )}






export default NavUser


// const NavUser = () => {
//   return (
//     <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link}  to ="/">Home</Nav.Link>
//             <Nav.Link as={Link}  to ="/Login">Se connecter</Nav.Link>
//             <Button as={Link}  to ="/Register" variant="primary">S'inscrire</Button>
//           </Nav>
//         </Container>
//       </Navbar>
//   )
// }

// fixed="top"

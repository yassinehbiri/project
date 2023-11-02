import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile from '../Assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../Redux/Actions/AuthActions';


const CardUser = ({el}) => {

  const dispatch = useDispatch()
  return (
    <div className='cardStyle'>
    <Card className='border-0 bg-white shadow-sm py-4'>
      <Card.Img
        src={profile}
        className="rounded-circle border border-dark-2 border-4"
        style={{ width: '100px', height: '100px' }}
        alt="Profile Image"/>
    <Card.Body>
      <Card.Title>{ el.name}</Card.Title>
      <Card.Text>{ el.email}</Card.Text>
    </Card.Body>


    <div className='btnCard'>
      
    <Button variant="outline-success" as={Link} to={`/updateUser/${el._id}`}>
        <FontAwesomeIcon icon={faPen} />
    </Button>
      <Button onClick={()=>dispatch(deleteUser(el._id))} variant="outline-danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
    </div>
  </Card>
  
  </div>
  )
}

export default CardUser



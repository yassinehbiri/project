import Form from 'react-bootstrap/Form';
import './Posts/CustomForm.css';
import { FormStyleHome } from './Styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../Redux/Actions/PostActions';
import ListPosts from './ListPosts';


const Home = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getAllPosts())
  },[dispatch])
  
  
 
  return (
    <div className='bgcolor2'>
      <div className='container-2'>
      {/* <Image style={{width:'200px'}} src={logo} ></Image> */}
      {/* <h1 style={titleStyle}>Trouvez votre voiture sur carea.tn</h1> */}
      
            <Form.Group className='mt-5' controlId="exampleForm.ControlInput1">

                <Form.Control style={FormStyleHome} type="text" placeholder='Rechercher sur Carea' className='custom-input-2'/>
            </Form.Group>
            <ListPosts />

      </div>

    </div>
     
    // <div className=''>
    //  <div className='bgcolor2'>
    //    <div className='container-2' >

    //   <div className=''>
    //   
    //     <h1 className='headerTextStyle'>Trouvez votre voiture sur carea.tn</h1>
    //       <Form.Group className='my-4' controlId="exampleForm.ControlInput1">
    //         <Form.Control style={FormStyleHome} type="text"/>
    //       </Form.Group>

    //   </div>
    //   </div>

      
    //   </div> 
    //  <div>
   

    //  </div>

    //  <div>
   
//      </div>


//     </div>
  );
};

export default Home;

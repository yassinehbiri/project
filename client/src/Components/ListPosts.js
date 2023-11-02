import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPost from "./CardPost";
import { getAllPosts } from "../Redux/Actions/PostActions";
import { current } from "../Redux/Actions/AuthActions";
import { FormStyleFilter, FormStyleHome, buttonStyles2, buttonStyles4 } from "./Styles";
import { Button, Form, InputGroup } from "react-bootstrap";

function ListPosts() {
  const dispatch = useDispatch();
const [marque,setMarque] = useState('')
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(current());
  }, [dispatch]);

  const posts = useSelector((state) => state.PostReducer.posts);
  const user = useSelector((state) => state.AuthReducer.user);
  const [filter, setFilter] = useState({
    marque: "marque",
    model: "model",
    year: "year",
    price: "price"
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [model,setModel]= useState('')
  const [year,setYear]= useState('')
  const [price,setPrice]= useState('')
  const [title,setTitle]= useState('')
  const filterArray = (array, title, model, marque) => {
    return array.filter(item => {
      const matchTitle = title ? item.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchModel = model ? item.model == model : true;
      const matchMarque = marque ? item.marque == marque : true;
      return matchTitle && matchModel && matchMarque;
    });
  };

  return (
    <div className="container-2">

<Form>

<Form.Group className='mt-5' controlId="exampleForm.ControlInput1">

<Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} style={FormStyleHome} type="text" placeholder='Rechercher sur Carea' className='custom-input-2'/>
</Form.Group>


<Form.Group controlId="marque">
        <Form.Label>Marque</Form.Label>
        <Form.Control
        className=''
          style={FormStyleFilter}
          as="select"
          name="marque"
          value={marque}
        onChange={(e) => setMarque(e.target.value)}
        >
          <option value="">Select Marque</option>
          <option value="Marque-1">Marque 1</option>
          <option value="Marque-2">Marque 2</option>
          <option value="Marque-3">Marque 3</option>
          <option value="Marque-4">Marque 4</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
        style={FormStyleFilter}
          as="select"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}>

          <option value="">Select Model</option>
          <option value="Modele-1">Modèle 1</option>
          <option value="Modele-2">Modèle 2</option>
          <option value="Modele-3">Modèle 3</option>
          <option value="Modele-4">Modèle 4</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>Year</Form.Label>
        <Form.Control
        
          style={FormStyleFilter}
          type="number"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <InputGroup>
          <Form.Control
          style={FormStyleFilter}
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputGroup.Text style={FormStyleFilter}>DT</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Button style={buttonStyles4} variant="primary" onClick={()=>{setMarque('');setModel('');setTitle('')}}>
        Reset
      </Button>
      </Form>
    <div className="ListStyle">
      


      {posts &&
        (user?.role === "admin", 'client'
          ? 

          <>
          {filterArray(posts,title,model,marque).map((el) => <CardPost key={el._id} el={el} />)}
          </>
          : posts
              .filter((el) => el.valid)
              .map((el) => <CardPost key={el._id} el={el} />))}
    </div>
    </div>
  );
}

export default ListPosts;

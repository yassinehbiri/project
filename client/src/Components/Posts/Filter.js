import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import {  FormStyleFilter,  buttonStyles4 } from '../Styles';

const Filter = ({ filter, setFilter }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleApplyFilter = () => {
    // Handle the filter application logic here
    // You can perform any necessary actions based on the filter values
    console.log(filter);
  };

  return (
    <div>
     

      <Form.Group controlId="marque">
        <Form.Label>Marque</Form.Label>
        <Form.Control
        className=''
          style={FormStyleFilter}
          as="select"
          name="marque"
          value={filter.marque}
          onChange={handleInputChange}
        >
          <option value="">Select Marque</option>
          <option value="Marque 1">Marque 1</option>
          <option value="Marque 2">Marque 2</option>
          <option value="Marque 3">Marque 3</option>
          <option value="Marque 4">Marque 4</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
        style={FormStyleFilter}
          as="select"
          name="model"
          value={filter.model}
          onChange={handleInputChange}>

          <option value="">Select Model</option>
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
          <option value="Model 4">Model 4</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>Year</Form.Label>
        <Form.Control
        
          style={FormStyleFilter}
          type="number"
          name="year"
          value={filter.year}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <InputGroup>
          <Form.Control
          style={FormStyleFilter}
            type="number"
            name="price"
            value={filter.price}
            onChange={handleInputChange}
          />
          <InputGroup.Text style={FormStyleFilter}>DT</InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Button style={buttonStyles4} variant="primary" onClick={handleApplyFilter}>
        Apply
      </Button>
    </div>
  );
};

export default Filter;

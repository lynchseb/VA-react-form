import React, { useState } from 'react'

import "../components/Registration.css"
import {Form, Col, Button} from 'react-bootstrap'

export default function Registration(props) {
  const [state, setState] = useState({
    name : {
      first: "",
      last: ""
    },
    address : {
      street: "",
      city: "",
      country: "",
      province: "",
      postal: ""
    },
    contact : {
      phone: "",
      email: "",
      website: ""
    },
    about: ""
  })
  const [error, setError] = useState("")
  
  function validate(state) {
    console.log("Fired!")
    if(!state.name.first || !state.name.last  || !state.address.street || !state.address.city || !state.address.country || !state.address.province  || !state.address.postal  || !state.contact.phone || !state.contact.email || !state.contact.website || !state.about ) {
      setError("Please ensure all fields are completed")   
      setTimeout(() => {
              setError("");
            }, 2500)
          return; 
    }
    console.log(state)
    props.onSubmit(state)
    props.mode("ACCOUNT")
  }
  

  //Form Handlers
  const handleFirstName = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.name.first = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleLastName = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.name.last = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  
  const handleStreet = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.address.street = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleCity = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.address.city = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleProvince = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.address.province = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleCountry = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.address.country = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handlePostal = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.address.postal = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handlePhone = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.contact.phone = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleEmail = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.contact.email = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleWebsite = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.contact.website = event.target.value
    setState(prev => ({...prev, ...newState}))
  };

  const handleAbout = (event) => {
    console.log(event.target.value)
    const newState = {...state}
    newState.about = event.target.value
    setState(prev => ({...prev, ...newState}))
  };
 

  return  ( 
    <Form>
          <section className="alert">{error}</section>
          
          <Form.Group as={Col} controlId="first-name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" onChange={(event) => handleFirstName(event)}/>
          </Form.Group>
          
          <Form.Group as={Col} controlId="last-name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" onChange={(event) => handleLastName(event)}/>
          </Form.Group>
      
      
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => handleEmail(event)} />
        </Form.Group>

        <Form.Group as={Col} controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" onChange={(event) => handlePhone(event)} />
        </Form.Group>

        <Form.Group as={Col} controlId="website">
          <Form.Label>Website</Form.Label>
          <Form.Control type="url" placeholder="Enter website URL" onChange={(event) => handleWebsite(event)} />
        </Form.Group>
    

      <Form.Group controlId="formGridStreet">
        <Form.Label>Street</Form.Label>
        <Form.Control type="address" placeholder="1234 Main St" onChange={(event) => handleStreet(event)}/>
      </Form.Group>

      
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(event) => handleCity(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProvince">
          <Form.Label>Province or Territory</Form.Label>
          <Form.Control as="select" defaultValue="Choose..." onChange={(event) => handleProvince(event)}>
            <option>Choose...</option>
            <option>Albert</option>
            <option>British Columbia</option>
            <option>Manitoba</option>
            <option>New Brunswick</option>
            <option>New Foundland</option>
            <option>Nova Scotia</option>
            <option>Ontario</option>
            <option>Prince Edward Island</option>
            <option>Quebec</option>
            <option>Saskatchewan</option>
            <option>NorthWest Territories</option>
            <option>Nunavut</option>
            <option>Yukon</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control onChange={(event) => handleCountry(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPostal">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control onChange={(event) => handlePostal(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="about">
          <Form.Label>About</Form.Label>
          <Form.Control type="url" placeholder="Tell us about yourself" onChange={(event) => handleAbout(event)} />
        </Form.Group>
      

      <Button variant="primary" onClick={() => validate(state)}>
        Submit
      </Button>
     
    </Form>
        
  );
}





import React, {useState} from "react";
import {Form, Container} from "react-bootstrap";

//was going to map a select for state list

function SubmitFormPage(){
    const [businessName, setBusinessName]= useState(" ");
    const [streetAddress, setStreetAddress]= useState(" ");
    //const [state, setState]= useState(" ");

        return (
            <Form>
                <Container>
                Submit accessibility information here:
              <Form.Group className="mb-3" controlId="formBusinessInfo">
                <Form.Label>Business Name</Form.Label>
                <Form.Control type="text" name="businessName" placeholder="Business Name" value = {businessName} onChange={(e)=> setBusinessName(e.target.value)} required/>
                <Form.Label>Business Street Address</Form.Label>
                <Form.Control type="text" name="streetAddress" placeholder="Street Address" value = {streetAddress} onChange={(e)=> setStreetAddress(e.target.value)} required/>

            </Form.Group>
            </Container>
            </Form>
        );
    }


export default SubmitFormPage

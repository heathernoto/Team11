import React from "react";
import {Form, Container} from "react-bootstrap";
class SubmitFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfUSStates:["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", 
                            "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", 
                            "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", 
                            "NJ", "NM","NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", 
                            "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"],
            businessName:"",
            streetAddress:"",
            selectedState:""
        }
    }

    

    render() {
        return (
            <Form>
                <Container>
                Submit accessibility information here:
                    <Form.Group className="mb-3" controlId="formBusinessInfo">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control type="text" name="businessName" placeholder="Business Name" value = {this.state.businessName} onChange={(e)=> this.setState({businessName: e.target.value})} required/>
                        <Form.Label>Business Street Address</Form.Label>
                        <Form.Control type="text" name="streetAddress" placeholder="Street Address" value = {this.state.streetAddress} onChange={(e)=> this.setState({streetAddress: e.target.value})} required/>
                        <Form.Label>Select your State</Form.Label>
                        <Form.Control as="select" aria-label="select state" >
                            {this.state.listOfUSStates.map((state) => {
                                return (<option key={state}>{state}</option>)
                            })}
                        </Form.Control>
                        
                    </Form.Group>
                </Container>
            </Form>
        )
    }
}

export default SubmitFormPage

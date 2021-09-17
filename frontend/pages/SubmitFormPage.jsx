import React from "react";
import {Form, Container, Button} from "react-bootstrap";

const defaultFormState = {
    businessName:"",
    city:"",
    streetAddress:"",
    selectedState:"",
    accessibilityBooleans: [false, false, false, false]
}
class SubmitFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfUSStates:["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", 
                            "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", 
                            "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", 
                            "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", 
                            "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"],
            accessibilityFeatures : ["rampPresent", 
                            "doorWidthAccessible", 
                            "stepsOnEntry", 
                            "restroomAccessible"],
            ...defaultFormState
        }
    }

    sendData = (e) => {
        console.log("SUBMIT")
        e.preventDefault();
        fetch("/api/businesses", {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                businessName: this.state.businessName,
                streetNumber: parseInt(this.state.streetAddress),
                streetName: this.state.streetAddress.replace(/[0-9]/g, ""),
                city: this.state.city,
                state: this.state.selectedState,
                ...this.state.accessibilityFeatures.map((feature, index) => {return {[feature]: this.state.accessibilityBooleans[index]}})
            })
        }).then(res => {
            return res.json()
        }, (err) => {
            console.log(err)
        }).then(res => {
            this.setState(() => (defaultFormState))
        })
    }

    render() {
        return (
            <Form>
                <Container>
                Submit accessibility information here:
                    <Form.Group className="mb-3" controlId="formBusinessInfo" >
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control type="text" name="businessName" placeholder="Business Name" value = {this.state.businessName} onChange={(e)=> this.setState({businessName: e.target.value})} required/>
                        <Form.Label>Business Street Address</Form.Label>
                        <Form.Control type="text" name="streetAddress" placeholder="Street Address" value = {this.state.streetAddress} onChange={(e)=> this.setState({streetAddress: e.target.value})} required/>
                        <Form.Label>Business City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="City" value = {this.state.city} onChange={(e)=> this.setState({city: e.target.value})} required/>
                        
                        <Form.Label>Select your State</Form.Label>
                        <Form.Control as="select" aria-label="select state" >
                            {this.state.listOfUSStates.map((state) => {
                                return (<option key={state}>{state}</option>)
                            })}
                        </Form.Control>
                        {this.state.accessibilityFeatures.map(((feature, index) => {
                            return (<Form.Group>
                                <Form.Label>{feature}</Form.Label>
                                <Form.Check
                                    checked={this.state.accessibilityBooleans[index]}
                                    name={feature}
                                    id={`${feature}`}
                                    onChange={() => {
                                        this.setState((oldState) => {
                                            oldState.accessibilityBooleans[index] = !oldState.accessibilityBooleans[index]
                                            return oldState
                                        })
                                    }}
                                />
                            </Form.Group>)
                        }))}
                        <Button type="submit" onClick={this.sendData}>Submit</Button>
                    </Form.Group>
                </Container>
            </Form>
        )
    }
}

export default SubmitFormPage

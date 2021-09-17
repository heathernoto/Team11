import React from "react";

import {Card } from 'react-bootstrap'

const BusinessCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{props.businessName}</Card.Title>
                <Card.Text>
                    {props.city}, {props.state}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BusinessCard
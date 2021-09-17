import React from "react";

import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
class SearchResultsPage extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <NavBar />
                <Container>
                    <BusinessCard 
                    />
                </Container>
            </>
        )
    }

}

export default SearchResultsPage
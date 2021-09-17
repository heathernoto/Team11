import React from "react";

import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import BusinessCard from "../components/BusinessCard";
class SearchResultsPage extends React.Component{

    constructor(props){
        super(props)
        console.log(props.location)
        this.state = {
            businesses: props.location != undefined && props.location.state != undefined ? props.location.state : []
        }
    }

    render() {
        return (
            <>
                <NavBar history={this.props.history} location={this.props.location} />
                <Container>
                    {this.state.businesses.map((business) => {
                        return ( 
                            <BusinessCard 
                                businessName={business.businessName}
                                city={business.city}
                                state={business.state}
                            />
                        )
                    })}
                </Container>
            </>
        )
    }

}

export default SearchResultsPage
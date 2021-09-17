import React from "react";

import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import BusinessCard from "../components/BusinessCard";
class SearchResultsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            businesses: [
                            {businessName: "Just a Random Bakery", city: "Hoboken", state: "NJ"}, 
                            {businessName: "Just a Random Restaurant", city: "New York", state: "NY"},
                            {businessName: "Just a Random Dollar Store", city: "White Plains", state: "NY"},
                            {businessName: "Just a Random Doctor's Office", city: "Philadelphia", state: "PA"}
                        ]
        }
    }

    render() {
        return (
            <>
                <NavBar />
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
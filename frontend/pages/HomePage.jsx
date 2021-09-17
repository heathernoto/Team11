import React from "react";

import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
class HomePage extends React.Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <NavBar history={this.props.history} location={this.props.location}/>
                <Container>
                    landing
                </Container>
            </>
        )
    }

}

export default HomePage
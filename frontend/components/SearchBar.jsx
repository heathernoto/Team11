import React from "react";
import {InputGroup, Dropdown, SplitButton, FormControl} from "react-bootstrap";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

      }




    render(){
        return (
    <InputGroup className="mb-3">
        <FormControl aria-label="Text input with dropdown button" />
            <SplitButton
                variant="outline-secondary"
                title="Action"
                id="segmented-button-dropdown-2"
                alignRight
            >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </SplitButton>
  </InputGroup>
        )

    }

}

export default SearchBar

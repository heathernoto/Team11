import React from "react";
import {InputGroup, Dropdown, SplitButton, FormControl, DropdownButton} from "react-bootstrap";


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfUSStates: ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", 
                            "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", 
                            "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", 
                            "NJ", "NM","NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", 
                            "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"],
            listOfBusinessTypes: ["Restaurants", "Retail", "Office", "Park"],
            selectedUSState: "",
            selectedBusinessType: "",
            searchInput: ""
        }
    }

    updateSearchInput = (e) => {
        this.setState(() => ({
            searchInput: e.target.value
        }), () => {
            console.log(this.state.searchInput)
        })
    }

    handleKeyPress = (target) => {
        if(target.charCode==13){
            this.onSearch()
        } 
    }

    onSearch = (e) => {
        console.log("SEARCH", this.state.searchInput, e)
        fetch(`/name?name=${encodeURIComponent(this.state.searchInput)}`, {
            method: "GET",
            headers: {
                "Accept": 'application/json'
            },
        }).then(res => {
            return res.json()
        }, err=> {
            console.log(err)
        }).then(res => {
            
            const pathName = this.props.location.pathname+this.props.location.search
            console.log(res, pathName)
            this.props.history.push("/?search", res)
        })
        
    }

    render(){
        console.log(this.state)
        return (
            <InputGroup className="mb-3" onKeyPress={this.handleKeyPress}>
                <FormControl aria-label="Text input with dropdown button" value={this.state.searchInput} onChange={this.updateSearchInput}/>
                    <SplitButton
                        variant="outline-secondary"
                        title="Search"
                        id="segmented-button-dropdown-2"
                        alignRight
                        onAbort
                        onClick={this.onSearch}
                        toggleLabel={this.state.selectedUSState === "" ? "Select State" : this.state.selectedUSState}
                    >
                        {this.state.listOfUSStates.map((usState) => {
                            return (
                                <Dropdown.Item 
                                    onClick={() => {
                                        this.setState(() => ({selectedUSState: usState}))
                                    }} 
                                    key={usState+"usState"}
                                >
                                    {usState}
                                </Dropdown.Item>
                            )
                        })}
                    </SplitButton>
                    <DropdownButton
                        variant="outline-secondary"
                        title={this.state.selectedBusinessType === "" ? "Select Type of Business" : this.state.selectedBusinessType}
                        id="input-group-dropdown-1"
                    >
                        {this.state.listOfBusinessTypes.map((businessType) => {
                            return (
                                <Dropdown.Item 
                                    onClick={() => {
                                        this.setState(() => ({selectedBusinessType: businessType}))
                                    }} 
                                    key={businessType+"businessType"}
                                >
                                    {businessType}
                                </Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
            </InputGroup>
        )

    }

}

export default SearchBar

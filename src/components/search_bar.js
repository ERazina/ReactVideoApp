import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = ({
            value: ''
        })
    }
    render(){
        return(
            <div>
                <input onChange={e => this.setState({value: e.target.value})}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default SearchBar;
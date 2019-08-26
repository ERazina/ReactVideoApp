import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import  API_KEY from './constants/constants';

const key = API_KEY;


class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({key: key, value: 'surfboards'}, (data) => {
      this.setState({videos: data});
      console.log(this.state.videos)
    });


  }
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<SearchBar />, document.querySelector('.container'));

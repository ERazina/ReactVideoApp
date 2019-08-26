import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import  {API_KEY} from './constants/constants';

const api_key = API_KEY;

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({key: api_key, value: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });


  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

import _ from 'lodash';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SearchBar from './components/search_bar.js'  //we need reference bcoz SerachBar is teh file that we have created and not default package or file.
import VideoList from './components/video_list.js'
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyAI9fNDYiPCjA0JinwN3tT3Yf1RlbKlI0I';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo: null
    };
   this.videoSearch('Ethereum');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term : term}, (videos) => {
       this.setState({
         videos: videos,
         selectedVideo : videos[0]
        });
         //This is equal ({videos : videos}) . When key and value pairs are equal, we make use of this kind of syntax.
    })
  }

  render(){
    //videoSearch can only be called once in every 300 seconds only.
    const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);
  return (
     //1.)This indeed means that if SearchBar calls onSearchTermChange with term as parameter, than that will indeded trigger videoSearch(term)
   <div>
 <SearchBar onSearchTermChange = {videoSearch}/>
  <VideoDetail video = { this.state.selectedVideo } />
  <VideoList
  onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
  videos = { this.state.videos }/>
  </div>
);
}
}

ReactDOM.render(<App />, document.querySelector('.container'));

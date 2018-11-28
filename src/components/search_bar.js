import React, { Component } from 'react';




class SearchBar extends Component { //A class based component.

  constructor(props){
    super(props);
    this.state = { term: ''}; //consider this term as a search term and it is initially empty. Whenever we change something in the searchbar, we need to update this value of term.
  }

   render() {
     return (
       <div className="search-bar">

       <input
       value = { this.state.term }
       onChange = {(event) => this.onInputChange(event.target.value)} />
  </div>
     )

   }
onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
}
}

export default SearchBar;

import React, {Component} from 'react';
import './App.css';
import Searchbar from './Searchbar';
import Filterbar from './Filterbar';
import BookList from './BookList';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        searchTerm: "",
        filter: null,
        printType: null,
        apiKey: 'AIzaSyB2SLy8hDROXstVznhBlM6FN7EwQE4HR_c',
        books: [],
        error: null
      };
    }


  handleSubmit(event){
      const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
      const term = this.state.searchTerm;
     
      const filter = this.state.filter;
      const print = this.state.printType;
      const key = this.state.apiKey;
      const url = baseUrl + term + '&filter=' + filter + '&printType=' + print + '&key=' + key;

      event.preventDefault();
      console.log(this.state);

      
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong, please try again later!')
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          books: data
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
    render(){
      return (
        <div className="App">
          <header>Google Book Search</header>
            <Searchbar handleSubmit={e => this.handleSubmit(e)}/>
            <Filterbar/>
            <BookList data={this.state.data}/>
        </div>
    );
  }
}

export default App;

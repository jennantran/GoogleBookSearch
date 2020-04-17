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
   searchChanged(search){
        this.setState({
          searchTerm: search
        })
      }

    printTypeChange(type){
      this.setState({
        printType: type
      })
    }

  handleSubmit(event){
      const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
      const filter = this.state.filter;
      const key = this.state.apiKey;
      const url = baseUrl + this.state.searchTerm + '&filter=' + filter + '&printType=' + this.state.printType + '&key=' + key;

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
            <Searchbar handleSubmit={e => this.handleSubmit(e)} search={e => this.searchChanged(e)}/>
            <Filterbar  type={e => this.printTypeChange(e)}/>
            <BookList data={this.state.data}/>
        </div>
    );
  }
}

export default App;

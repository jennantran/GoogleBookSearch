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
        bookType: "",
        printType: 'all',
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

    bookTypeChange(bktype){
      this.setState({
        bookType: bktype
      })
    }
  handleSubmit(event){
      const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
      const filter = this.state.filter;
      const key = this.state.apiKey;
      const url = baseUrl + this.state.searchTerm + '&filter=' + this.state.bookType + '&printType=' + this.state.printType + '&key=' + key;

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
        console.log(data);
        this.setState({
          books: data.items
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
            <Filterbar  type={e => this.printTypeChange(e)} bktype={e => this.bookTypeChange(e)}/>
            <BookList bookItems={this.state.books}/>
        </div>
    );
  }
}

export default App;

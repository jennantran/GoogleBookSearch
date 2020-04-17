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
      event.preventDefault();
      // this.setState({
      //   filter: document.getElementById('filterPrint'),
      //   printType: document.getElementById('filterBook')
      // })
      console.log(this.state);
      
    fetch(`https://www.googleapis.com/books/v1/volumes?q=`+ this.state.searchTerm+ `&filter=` + this.state.filter + `&printType` + this.state.printType + `&key=` + this.state.apiKey`)
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

import React, {Component} from 'react';
import './App.css';
import Searchbar from './Searchbar';
import Filterbar from './Filterbar';
import Booklist from './BookList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>Google Book Search</header>
        <Searchbar/>
        <Filterbar/>
        {/* <BookList/> */}
      </div>
    );
  }
}

export default App;

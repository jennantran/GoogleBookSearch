import React,{Component} from 'react';
import './Searchbar.css';


class Searchbar extends Component{
    render(){
        return(
            <div className="searchbar">
                <form className="searchbar_form">
                    <label htmlFor="search">Search:</label>
                        <input
                            type="searchBook"
                            name="searchBook"
                            id="searchBook"
                            placeholder="Henry">
                        </input>
                    <div className="searchbar_button">
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
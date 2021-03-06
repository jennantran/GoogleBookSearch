import React,{Component} from 'react';
import './Searchbar.css';


class Searchbar extends Component{
    constructor(props) {
        super(props)
      }

 
    render(){
        return(
            <div className="searchbar">
                <form onSubmit={ e => this.props.handleSubmit(e)} className="searchbar_form">
                    <label htmlFor="search">Search:</label>
                        <input
                            type="searchBook"
                            name="searchBook"
                            id="searchBook"
                            onChange={ e => this.props.search(e.target.value) }
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
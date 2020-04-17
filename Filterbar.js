import React,{Component} from 'react';
import './Filterbar.css';

class Filterbar extends Component{
    render(){
        return(
            <div className="filterbar">
                <form className="filterbar_form">
                    <label htmlFor="printType">Print:</label>
                        <select
                            onChange={e => this.props.type(e.target.value)}
                            type="filterPrint"
                            className="filterPrint"
                            id="filterPrint">
                                <option>All</option>
                                <option>books</option>
                                <option>magazines</option> 
                        </select>
                </form>
                <form className="filterBookTypeForm">
                     <label htmlFor="bookType">Book Type:</label>
                        <select
                            type="filterBook"
                            className="filterBook"
                            id="filterBook">
                                <option>No Filter</option>
                                <option>partial</option>
                                <option>full</option>
                                <option>free-ebooks</option>
                                <option>paid-ebooks</option>
                                <option>ebooks</option>
                        </select>
                </form>
            </div>
        );
    }
}

export default Filterbar;
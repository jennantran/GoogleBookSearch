import React,{Component} from 'react';
import './Filterbar.css';

class Filterbar extends Component{
    render(){
        return(
            <div className="filterbar">
                <form className="filterbar_form">
                    <label htmlFor="printType">Print:</label>
                        <select
                            type="filterPrint"
                            className="filterPrint"
                            id="filterPrint">
                                <option>All</option>
                        </select>
                </form>
                <form className="filterBookTypeForm">
                     <label htmlFor="printType">Book Type:</label>
                        <select
                            type="filterBook"
                            className="filterBook"
                            id="filterBook">
                                <option>No Filter</option>
                        </select>
                </form>
            </div>
        );
    }
}

export default Filterbar;
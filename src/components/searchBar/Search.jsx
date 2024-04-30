import React from "react";
import searchIcon from '../../assets/search-icon.svg';
import './search.css';
const search = () =>{
    return(<div className="searchMain">
        <form>
            <input
            placeholder="Search a song of your choice"
            />
            <button type="submit">
                <img src={searchIcon} alt="search"/>
            </button>
        </form>
    </div>)
}

export default search
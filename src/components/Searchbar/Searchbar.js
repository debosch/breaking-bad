import React from "react";

import './searchbar.scss';

const SearchBar = () => {
    return (
        <form className="search-bar" action="none" onSubmit={ (e) => e.preventDefault() }>
            <input type="text" className="search-bar__input" />
            <button type="submit" className="search-bar__submit-button"><p className="search-bar__submit-button-text">Search</p></button>
        </form>
    );
};

export default SearchBar;
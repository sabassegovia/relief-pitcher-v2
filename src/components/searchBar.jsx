import React, {useState, useEffect} from 'react';
import Link from 'next/Link';


const SearchBar = ({searchInput, setSearchInput, query, setQuery}) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    let temp = e.target.value;
    setSearchInput(temp);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    setSearchInput('');
  }

  return (
    <div>in search bar
      <form onSubmit={handleSubmit}>
        <label>Search for brewery: </label>
        <input
          placeholder="search..."
          type="text"
          value={searchInput || ""}
          onChange={handleChange}
        />
        {searchInput !== "" ? <Link href='/searchBarResults'><button>Search</button></Link> : <></>}
      </form>
    </div>
  )
}

export default SearchBar;
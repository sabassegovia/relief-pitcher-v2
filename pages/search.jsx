import React from 'react';
import FilterSearch from '../src/components/filterSearch.jsx';
import SearchBar from '../src/components/searchBar.jsx';

const SearchPage = (props) => {
  return (
    <div id='confirmed'>
      {/**overall container for both search components*/}
      <h1>We are in the approved 21 y/o page</h1>
      <div>
        <SearchBar
          searchInput={props.searchInput}
          setSearchInput={props.setSearchInput}
          query={props.query}
          setQuery={props.setQuery}
          />
        <FilterSearch
          state={props.state}
          setState={props.setState}
          zip={props.zip}
          setZip={props.setZip}
          type={props.type}
          setType={props.setType}
          feature={props.feature}
          setFeature={props.setFeature}
          keyword={props.keyword}
          setKeyword={props.setKeyword}
          validSubmit={props.validSubmit}
          setValidSubmit={props.setValidSubmit}
        />
      </div>
    </div>
  )
}

export default SearchPage;
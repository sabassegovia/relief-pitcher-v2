import React from 'react';
import FilterSearch from '../src/components/filterSearch.jsx';
import SearchBar from '../src/components/searchBar.jsx';
import SearchCSS from '/styles/Search.module.css';

const Search = (props) => {
  return (
    <div id='confirmed'>
      <div >
        <p>&nbsp;</p>
        <h3 className={SearchCSS.searchContainers}>Let&apos;s find you a drink&#33;</h3>
        <p>&nbsp;</p>
      </div>
      <div className={SearchCSS.searchContainers}>
        <SearchBar

          searchInput={props.searchInput}
          setSearchInput={props.setSearchInput}
          query={props.query}
          setQuery={props.setQuery}
        />
        <span>OR</span>
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

export default Search;
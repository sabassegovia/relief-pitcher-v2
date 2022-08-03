import React, { useState, setState } from "react";
import Link from 'next/Link';

const FilterSearch = ({
  state,
  setState,
  zip,
  setZip,
  type,
  setType,
  feature,
  setFeature,
  keyword,
  setKeyword,
  validSubmit,
  setValidSubmit,
}) => {

  var filterObj = [];
  function handleSubmit(e) {
    e.preventDefault();
    if (state !== null) {
      filterObj.push({ state: state });
    }
    if (zip !== "" && zip.length === 5) {
      filterObj.push({ zip: zip });
    }
    if (type !== null) {
      filterObj.push({ type: type });
    }
    if (feature !== null) {
      filterObj.push({ feature: feature });
    }
    if (keyword !== "") {
      filterObj.push({ keyword: keyword });
    }
    if (Object.keys(filterObj).length >= 1) {
      setValidSubmit(true);
    }
  }

  let enableSubmit;
  if (state || zip || type || feature || keyword) {
    enableSubmit = (
      <Link href="/filterBarResults">
         <button>Search</button>
      </Link>
    )
  }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>State:</label>
          <select
            value={state || ""}
            placeholder="Pick a state..."
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Pick a state...</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Akansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District of Columbia">District of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
          <br></br>

          <label>Zip:</label>
          <input
            type="number"
            onChange={(e) => setZip(e.target.value)}
            value={zip || ""}
            placeholder="Enter zip..."
          />

          <br></br>

          <label>Type:</label>
          <select
            placeholder="Brewery type..."
            value={type || ""}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Brewery type...</option>
            <option value="micro">Micro</option>
            <option value="regional">Regional</option>
            <option value="brewpub">Brewpub</option>
            <option value="large">Large</option>
          </select>

          <br></br>

          <label>Feature:</label>
          <select
            placeholder="Pick featue..."
            value={feature || ""}
            onChange={(e) => setFeature(e.target.value)}
          >
            <option value="">Pick feature...</option>
            <option value="dog-friendly">&#128021;dog friendly </option>
            <option value="patio">patio</option>
            <option value="food-service">food service</option>
            <option value="food-truck">food truck</option>
            <option value="tours">tours</option>
          </select>
          <br></br>

          <label>Keyword:</label>
          <input
            type="text"
            placeholder="Enter keyword..."
            value={keyword || ""}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {enableSubmit}
        </form>
      </div>
    );
};

export default FilterSearch;

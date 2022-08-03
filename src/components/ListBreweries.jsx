import React, { useState, setState } from "react";
import Link from 'next/Link';

const ListBreweries = ({ brewery, setBrewery }) => {

  return (
    <li onClick={(e) => setBrewery(brewery)}>
      <a
        href={brewery.website_url}
        target="_blank"
        rel="noopener noreferrer">{brewery.name}
      </a>
      : {brewery.city}, {brewery.state}
    </li>)
};

export default ListBreweries;

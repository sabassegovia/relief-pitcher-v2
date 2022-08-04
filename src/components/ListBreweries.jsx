import React, { useState, setState } from "react";
import Link from 'next/Link';
import ListBreweriesCSS from '../../styles/ListBreweries.module.css';

const ListBreweries = ({ brewery, setBrewery }) => {
  return (
    <div>
      <li
        onClick={(e) => setBrewery(brewery)}
        className={ListBreweriesCSS.widecard}
      >
        <a
          href={brewery.website_url || `https://www.google.com/search?q=${brewery.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {brewery.name}
        </a>
        <p>
          {brewery.street || ""}&nbsp;{brewery.city || ""}&#44; {brewery.state || ""}&nbsp;{brewery.postal_code.slice(0,5) || ""}
        </p>
      </li>
      </div>
  );
};

export default ListBreweries;
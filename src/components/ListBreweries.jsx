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
          : {brewery.city}, {brewery.state}
        </p>
      </li>
      </div>
  );
};

export default ListBreweries;



// import React, { Component } from 'react'

// class Widecard extends Component {
//     render() {
//         return (
//             <div class="widecard">
//             <div class="compdet">
//             <h3>{this.props.title}</h3>
//             <h4 class="secondtext">{this.props.where}</h4>
//             <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
//             </div>
//             </div>
//             )
//         }
//     }
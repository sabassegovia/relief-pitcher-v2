import React, {useEffect, useState} from 'react';
import ListBreweries from '../src/components/ListBreweries.jsx';
import Link from 'next/Link';
import ListBreweriesCSS from '/styles/ListBreweries.module.css';

export default function SearchBarResults({ searchInput }) {
  const [isLoading, setisLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  const [getBrewery, setBrewery] = useState(null);

  useEffect(() => {
    async function fetchSearchresults() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
        }
      };

      const res = await fetch(`https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=${searchInput}`, options);
      const data = await res.json();

      setSearchResults(data);
      setisLoading(false);
      console.log(data);
    }
    fetchSearchresults();
  }, [searchInput])

  let addressInfo = '';


  if (isLoading) {
    return <h2 className={ListBreweriesCSS.singlewidecard}>Loading...</h2>
  } else if (getBrewery === null) {
    return (
      <>
        <div>
          <ol>
            {searchResults.map((brewery, i) => {
              return <ListBreweries
                key={i + brewery.id}
                brewery={brewery}
                setBrewery={setBrewery}
              />
            })}
          </ol>
        </div>
        <span className={ListBreweriesCSS.centerBtn}>
          <Link href='/search'>
            <button>
              Return to Search
            </button>
          </Link>
        </span>
      </>
    )
  } else {
    let addressInfo = '';
    if (getBrewery.street) {
      addressInfo += getBrewery.street;
    }
    if (getBrewery.city) {
      addressInfo += ' ' + getBrewery.city + ', ';
    } else {
      addressInfo += ', '
    }
    if (getBrewery.state) {
      addressInfo += ' ' + getBrewery.state + ', ';
    }
    if (getBrewery.postal_code) {
      addressInfo += getBrewery.postal_code.slice(0, 5);
    }
    let phoneFormatted = '';
    if (getBrewery.phone) {
      phoneFormatted +=  '(' + getBrewery.phone.slice(0, 3) + ') ' +   getBrewery.phone.slice(3, 6) + ' - ' + getBrewery.phone.slice(6)
    }

    return (
      <>
        <div className={ListBreweriesCSS.singlewidecard}>
          <a
            href={getBrewery.website_url || `https://www.google.com/search?q=${getBrewery.name}`}
            target="_blank"
            rel="noopener noreferrer">{getBrewery.name}
          </a>
          <p>
            {addressInfo}
            <br />
            {phoneFormatted}
          </p>
          <br />
        </div>
        <span className={ListBreweriesCSS.centerBtns}>
          <button onClick={() => setBrewery(null)}>
            Return to List
          </button>
          <Link href='/search'>
            <button>
              Return to Search
            </button>
          </Link>
        </span>
      </>
    )
  }
}

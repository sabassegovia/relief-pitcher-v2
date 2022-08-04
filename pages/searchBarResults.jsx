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
        <Link href='/search'>
          <button>
            Return to Search
          </button>
        </Link>
      </>
    )
  } else {
    //replace with a function for reuse
    return (
      <div>
        <ol>
          <li className={ListBreweriesCSS.singlewidecard}>
            <a
              href={getBrewery.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getBrewery.name}
            </a>
            : {getBrewery.city}, {getBrewery.state}<br />
          </li>
        </ol>
          <button onClick={() => setBrewery(null)}>
            Return to List
          </button>
          <Link href='/search'>
            <button>
              Return to Search
            </button>
          </Link>
      </div>)
  }
}

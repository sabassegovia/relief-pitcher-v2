import React, {useEffect, useState} from 'react';
import ListBreweries from '../src/components/ListBreweries.jsx';
import Link from 'next/Link';

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
    return <h2>Loading...</h2>
  } else if (getBrewery === null) {
    return (
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
        <Link href='/search'>
          <button>
            Return to Search
          </button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <h4>Single brewery: {getBrewery.name}</h4>
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

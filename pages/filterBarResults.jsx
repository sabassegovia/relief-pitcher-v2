import React, {useEffect, useState} from 'react';
import ListBreweries from '../src/components/ListBreweries.jsx';
import Link from 'next/Link';

export default function FilterBarResults({ state, zip, type, feature, keyword }) {
  const [isLoading, setisLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  const [getBrewery, setBrewery] = useState(null);

  useEffect(() => {
    async function fetchSearchresults() {
      let qString = [];
      if (state) {
        qString.push(`by_state=${state}`)
      }
      if (keyword) {
        qString.push(`by_name=${keyword}`)
      }
      if (type) {
        qString.push(`by_type=${type}`)
      }
      if (feature) {
        qString.push(`by_tag=${feature}`)
      }
      if (zip) {
        qString.push(`by_postal=${zip}`)
      }
      qString = qString.join('&');
      console.log(qString);
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
        }
      };

      const res = await fetch(`https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?${qString}`, options)
      const data = await res.json();

      setSearchResults(data);
      setisLoading(false);

      console.log(data);
    }
    fetchSearchresults();
  }, [state, zip, type, feature, keyword]);

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
    //replace with a function for reuse
    return (
      <div>
        <a
        href={getBrewery.website_url || `https://www.google.com/search?q=${getBrewery.name}`}
        target="_blank"
        rel="noopener noreferrer">{getBrewery.name}
      </a>
        : {getBrewery.city}, {getBrewery.state}
        <br/>
        <button onClick={() => setBrewery(null)}>
          Return to List
        </button>
        <Link href='/search'>
          <button>
            Return to Search
          </button>
        </Link>
      </div>
    )
  }
}

//fectch data using this criteria
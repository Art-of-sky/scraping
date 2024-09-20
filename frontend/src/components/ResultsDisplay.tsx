import React, { useEffect, useState } from 'react';

const ResultsDisplay = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('/api/scraping');
      const data = await response.json();
      setResults(data);
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h2>Scraping Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            URL: {result.url} - Domains: {result.domains.length} - Time: {new Date(result.executionTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDisplay;

import React from 'react';
import ScraperForm from './components/ScraperForm';
import ResultsDisplay from './components/ResultsDisplay';

const App = () => (
  <div>
    <h1>Web Scraper</h1>
    <ScraperForm />
    <ResultsDisplay />
  </div>
);

export default App;

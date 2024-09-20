import React, { useState } from 'react';

const ScraperForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/scraping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter website URL" 
      />
      <button type="submit">Scrape</button>
    </form>
  );
};

export default ScraperForm;

"use client";

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement your search logic here
    // For now, we'll just add the query to results
    setSearchResults(prev => [query, ...prev].slice(0, 5));
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Actor Graph</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Search for actors, movies, or shows..."
            className="mb-8"
          />
          
          {searchResults.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
              <ul className="space-y-2">
                {searchResults.map((result, index) => (
                  <li key={index} className="p-3 bg-gray-50 rounded hover:bg-gray-100">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

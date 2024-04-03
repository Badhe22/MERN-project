import React, { createContext, useContext, useState } from 'react';

// Create context
const SearchContext = createContext();

// Custom hook for using search context
export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={[searchResults, setSearchResults]}>
      {children}
    </SearchContext.Provider>
  );
};

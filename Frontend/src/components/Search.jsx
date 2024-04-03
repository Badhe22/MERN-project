import React from 'react';
import Layout from './../components/Layout/Layout';
import { useSearch} from '../Context/SearchContext';

const Search = () => {
  const [searchResults] = useSearch();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {searchResults.length < 1
              ? "No Products Found"
              : `Found ${searchResults.length} Products`}
          </h6>
          {/* Render search results here */}
        </div>
      </div>
    </Layout>
  );
};

export default Search;

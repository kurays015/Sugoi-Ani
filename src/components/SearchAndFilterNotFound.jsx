function SearchAndFilterNotFound({ isSearching, searchResult }) {
  return (
    <>
      {isSearching && (
        <p className="text-violet-300 text-center">Searching...</p>
      )}
      {searchResult && (
        <p className="text-violet-300 text-center">Not found...</p>
      )}
    </>
  );
}

export default SearchAndFilterNotFound;

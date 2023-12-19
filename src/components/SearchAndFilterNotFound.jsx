function SearchAndFilterNotFound({ isSearching, searchResult }) {
  return (
    <>
      {isSearching && (
        <p className="text-violet-300 text-center my-2">Searching...</p>
      )}
      {searchResult && (
        <p className="text-violet-300 text-center my-2">Not found...</p>
      )}
    </>
  );
}

export default SearchAndFilterNotFound;

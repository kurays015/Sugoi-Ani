export function ApiError({ error }) {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-center">
      <h1 className="text-2xl">
        Opp! Something went wrong, it's not your fault haha!
      </h1>
      <p>{error}</p>
    </div>
  );
}

export function EpisodeError() {
  return (
    <h1 className="text-white text-center w-full custom-sm:text-xs md:text-base lg:text-2xl custom-xxl:w-[40%]">
      Something went wrong! It's either the anime has no episodes or server
      error.
    </h1>
  );
}

export function SingleAnimeDataError() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full p-2">
      <h1 className="text-primary text-sm text-center">
        Something went wrong! It's either the anime has no data or server error
        (especially one piece), try again later.
      </h1>
    </div>
  );
}

export function SearchError() {
  return (
    <h1 className="text-white text-xl text-center">
      Search error, try again later or reload the page.
    </h1>
  );
}

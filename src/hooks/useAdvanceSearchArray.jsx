export const useAdvanceSearchArray = () => {
  return {
    types: [
      {
        type: "genres",
        queries: [
          "Action",
          "Adventure",
          "Comedy",
          "Drama",
          "Fantasy",
          "Horror",
          "Mahou Shoujo",
          "Mecha",
          "Music",
          "Mystery",
          "Psychological",
          "Romance",
          "Sci-Fi",
          "Slice of Life",
          "Sports",
          "Supernatural",
          "Thriller",
        ],
      },
      {
        type: "year",
        queries: Array.from({ length: 26 }, (_, i) => 1998 + i),
      },
      {
        type: "season",
        queries: ["FALL", "SUMMER", "WINTER", "SPRING"],
      },
      //asdsadsd
      {
        type: "status",
        queries: [
          "RELEASING",
          "NOT_YET_RELEASED",
          "FINISHED",
          "CANCELLED",
          "HIATUS",
        ],
      },
      {
        type: "Type",
        queries: ["TV", "TV_SHORT", "OVA", "ONA", "MOVIE", "SPECIAL", "MUSIC"],
      },
    ],
  };
};

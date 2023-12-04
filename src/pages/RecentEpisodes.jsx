import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import GridCardContainer from "../components/GridCardContainer";
import { useCategoryContext } from "../hooks/useCategoryContext";

function RecentEpisodes() {
  const { pageNumber, itemsPerPage } = useCategoryContext();

  const {
    data: recentEpisodes,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("recent-episodes", pageNumber, itemsPerPage);

  if (isError) return <Error error={error} />;

  const filteredAnime =
    recentEpisodes?.results.filter(
      anime => anime.id !== "102404" && anime.id !== "1939"
    ) || [];

  return <GridCardContainer isLoading={isLoading} animes={filteredAnime} />;
}

export default RecentEpisodes;

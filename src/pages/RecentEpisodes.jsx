import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import GridCardContainer from "../components/GridCardContainer";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { ApiError } from "../components/Errors";

function RecentEpisodes() {
  const { pageNumber } = useCategoryContext();

  const {
    data: recentEpisodes,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("recent-episodes", pageNumber);

  if (isError) return <ApiError error={error} />;

  const filteredAnime =
    recentEpisodes?.results.filter(
      anime => anime.id !== "102404" && anime.id !== "1939"
    ) || [];

  return <GridCardContainer isLoading={isLoading} animes={filteredAnime} />;
}

export default RecentEpisodes;

import { useAuthContext } from "../hooks/useAuthContext";

export default function handleNavigate(singleAnimeData) {
  const { user } = useAuthContext();
  if (!user) {
    return "/user/login";
  } else if (user && singleAnimeData.episodes.length) {
    return `/watch/${singleAnimeData.episodes[0]?.id}`;
  } else if (singleAnimeData.episodes.length === 0) {
    return "/NoEpisode";
  }
}

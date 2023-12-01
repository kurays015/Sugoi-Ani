import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import RecentEpisodes from "./pages/RecentEpisodes";
import AnimeInfo from "./pages/AnimeInfo";
import WatchEpisode from "./pages/WatchEpisode";
import SearchResult from "./components/SearchResult";
import AnimeLayout from "./components/AnimeLayout";
import WatchLayout from "./components/WatchLayout";
import NoEpisode from "./components/NoEpisode";
import NotFound from "./components/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/signup" element={<Signup />} />
      <Route element={<Layout />}>
        <Route path="popular" element={<Popular />} />
        <Route path="trending" element={<Trending />} />
        <Route path="recent" element={<RecentEpisodes />} />
        <Route path=":title" element={<SearchResult />} />
      </Route>

      <Route element={<AnimeLayout />}>
        <Route path="info/:id" element={<AnimeInfo />} />
      </Route>

      <Route path="/watch" element={user ? <WatchLayout /> : <Login />}>
        <Route path=":episodeId" element={<WatchEpisode />} />
      </Route>
      <Route path="/NoEpisode" element={<NoEpisode />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

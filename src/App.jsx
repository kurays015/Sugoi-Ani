import { Routes, Route, Navigate } from "react-router-dom";
//components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import RecentEpisodes from "./pages/RecentEpisodes";
import AnimeInfo from "./pages/AnimeInfo";
import WatchEpisode from "./pages/WatchEpisode";
import SearchResult from "./components/SearchResult";
import NotFound from "./components/NotFound";
//hooks
import { useAuthContext } from "./hooks/useAuthContext";
//layouts component
import Layout from "./components/Layouts/Layout";
import AnimeLayout from "./components/Layouts/AnimeLayout";
import WatchLayout from "./components/Layouts/WatchLayout";

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

      {/* private/protected route - need to fix this bacause every reload it redirect to login page*/}
      <Route
        path="/watch"
        element={
          user ? <WatchLayout /> : <Navigate to="/user/login" replace={true} />
        }
      >
        <Route path=":episodeId" element={<WatchEpisode />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

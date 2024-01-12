import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//layouts component
import Layout from "./components/Layouts/Layout";
import AnimeLayout from "./components/Layouts/AnimeLayout";
import WatchLayout from "./components/Layouts/WatchLayout";
import SearchResult from "./components/SearchResult";
import NotFound from "./components/NotFound";
//pages
import AdvanceSearch from "./pages/advance-search/AdvanceSearch";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import Popular from "./pages/categories/Popular";
import Trending from "./pages/categories/Trending";
import RecentEpisodes from "./pages/categories/RecentEpisodes";
import AnimeInfo from "./pages/AnimeInfo";
import WatchEpisode from "./pages/WatchEpisode";
import Cookies from "js-cookie";

function App() {
  const location = useLocation();
  const user =
    JSON.parse(Cookies.get("user") || null) || Cookies.get("googleUser");

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/user/login" replace={true} />;
  };

  const HideLogin = ({ children }) => {
    return !user && location.pathname === "/user/login" ? (
      children
    ) : (
      <Navigate to="/recent" replace={true} />
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/user/login"
        element={
          <HideLogin>
            <Login />
          </HideLogin>
        }
      />
      <Route path="/user/signup" element={<Signup />} />

      <Route element={<Layout />}>
        <Route path="popular" element={<Popular />} />
        <Route path="trending" element={<Trending />} />
        <Route path="recent" element={<RecentEpisodes />} />
        <Route path=":title" element={<SearchResult />} />
        <Route path="advanced-search" element={<AdvanceSearch />} />
      </Route>

      <Route element={<AnimeLayout />}>
        <Route path="info/:id" element={<AnimeInfo />} />
      </Route>

      {/* Private Route */}
      <Route
        path="/watch"
        element={
          <PrivateRoute>
            <WatchLayout />
          </PrivateRoute>
        }
      >
        <Route path=":episodeId" element={<WatchEpisode />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

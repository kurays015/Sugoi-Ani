import { Link } from "react-router-dom";
import AnimeInfoHeader from "./AnimeInfoHeader";
function NoEpisode() {
  return (
    <>
      <AnimeInfoHeader />
      <main className="text-white  py-5 ">
        <section className="text-center">
          <p className="text-xl">No episodes available for this anime.</p>
          <Link to="/" className="text-violet-300">
            Go back
          </Link>
        </section>
      </main>
    </>
  );
}

export default NoEpisode;

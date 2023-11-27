import { Link } from "react-router-dom";

function NoEpisode() {
  return (
    <main className="text-white bg-[#242424] py-5 ">
      <section className="text-center">
        <p className="text-xl">No episodes available for this anime.</p>
        <Link to="/" className="text-violet-500">
          Go back
        </Link>
      </section>
    </main>
  );
}

export default NoEpisode;

import Card from "./Card";

function Recommendations({ recommendations }) {
  return (
    <div className="max-w-[85%] mx-auto my-8 custom-sm:max-w-full">
      <h1 className="mb-[1em] text-2xl font-medium text-[#aaa]">
        Recommendations
      </h1>
      <div className="grid gap-[1em] custom-sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        <Card animes={recommendations} />
      </div>
    </div>
  );
}

export default Recommendations;

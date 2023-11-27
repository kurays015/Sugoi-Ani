function Error({ error }) {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <h1 className="text-white text-2xl">
        Opp! Something went wrong, it's not your fault haha!
      </h1>
      <p className="text-white">{error}</p>
    </div>
  );
}

export default Error;

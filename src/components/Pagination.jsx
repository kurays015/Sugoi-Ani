import { useCategoryContext } from "../hooks/useCategoryContext";

function Pagination() {
  const { pageNumber, setPageNumber } = useCategoryContext();
  const handlePrev = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };
  const handleNext = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-10 w-full p-2 mb-5">
        <button
          className="bg-[#212121] text-white py-2 px-6 transition-all duration-300 ease-in-out rounded-[4px] text-md hover:bg-[#6735AE]"
          onClick={handlePrev}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <p className="text-white text-xs font-semibold">{pageNumber}</p>
        <button
          className="bg-[#212121] text-white py-2 px-6 transition-all duration-300 ease-in-out rounded-[4px] text-md hover:bg-[#6735AE]"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="text-center text-xs text-[#777777] py-2">
        Made by Christ 💜
      </div>
    </>
  );
}

export default Pagination;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../hooks/useCategoryContext";

const Chip = ({ text, selected, setSelected }) => {
  const { setPageNumber } = useCategoryContext();

  const handlePage = () => {
    setSelected(selected ? null : text);
    setPageNumber(1);
  };

  useEffect(() => {
    if (selected) {
      setSelected(text);
    }
  }, [selected, setSelected, text]);
  return (
    <button
      onClick={handlePage}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-2 rounded-md relative`}
    >
      <Link className="relative z-10" to={`${text.toLowerCase()}`}>
        {text}
      </Link>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-[#6735AE] rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

const ChipTabs = ({ categories }) => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="flex gap-5">
      {categories.map(category => (
        <Chip
          text={category}
          selected={selected === category}
          setSelected={setSelected}
          key={category}
        />
      ))}
    </div>
  );
};

export default ChipTabs;

import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useGetAnimeDataInLocalStorage = () => {
  return JSON.parse(localStorage.getItem("anime") || "[]");
};

export const useDownloadSrc = () => {
  return JSON.parse(localStorage.getItem("src"));
};

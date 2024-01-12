import Cookies from "js-cookie";

export const getCookies = key => {
  return Cookies.get(key);
};

export const setCookies = (key, value) => {
  return Cookies.set(key, value, { expires: 7 });
};

export const removeCookies = key => {
  return Cookies.remove(key);
};

import axios from "axios";

const anime = axios.create({
  baseURL: "https://consumet-christ.vercel.app/meta/anilist",
});

export default anime;
// https://api-consumet-3lqsgk5t7-carlosesteven.vercel.app/meta/anilist - working atm
// https://consumet-christ.vercel.app/meta/anilist - new
// https://consumett.vercel.app/meta/anilist - not working atm
// https://consumet-cloned2.vercel.app/meta/anilist - not working atm

export function titleHandler(title) {
  if (title.english) {
    return title.english;
  } else if (title.romaji) {
    return title.romaji;
  } else if (title?.usePreferred) {
    return title.usePreferred;
  } else {
    return "Unknown title";
  }
}

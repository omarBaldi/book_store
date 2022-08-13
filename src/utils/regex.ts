export const isExternalLink = (url: string) => {
  return /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/.test(url);
};

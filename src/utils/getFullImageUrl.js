import isValidUrl from "./isValidUrl";
import { MOVIES_URL } from "./constants";

const getFullImageUrl = (data) => {
  if (isValidUrl(data)) {
    return data;
  }
  return `${MOVIES_URL}${data.url}`;
};

export default getFullImageUrl;

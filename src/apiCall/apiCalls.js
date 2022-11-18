import axios from "axios";
import URL from "./apiUrls";

export const getUser = async () => {
  const res = await axios.get(URL.userAPI);
  return res.data;
};

export const getComment = async () => {
    const res = await axios.get(URL.commentAPI);
    return res.data;
  };

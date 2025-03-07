import { blogDataType } from "../constants/dataTypes";

export const getInitialBlogData = async () => {
  try {
    let result = await fetch("https://dummyjson.com/posts");
    let resultJson: blogDataType = await result.json();
    return resultJson;
  } catch (err) {
    console.log(err);
    throw new Error("error");
  }
};

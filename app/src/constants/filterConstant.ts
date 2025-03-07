import { blogDataType, postDataType } from "./dataTypes";

export enum FILTER_CONSTANT{
  // AUTHOR: "Author",
  TITLE =  "Title",
  NO_OF_LIKES = "Number Of Likes",
  VIEWS = "Views",
};

export const filterHandler = (filterType: string, blogData: postDataType[]) => {
  console.log("🚀 ~ filterHandler ~ blogData:", blogData)
  let sortedData;
  switch (FILTER_CONSTANT[filterType]) {
    // case FILTER_CONSTANT.AUTHOR:
    //     return blogData.sort()
    case FILTER_CONSTANT.TITLE:
      sortedData = blogData?.toSorted((post1, post2) => post1.title > post2.title ? 1 : -1);
      break;
    case FILTER_CONSTANT.NO_OF_LIKES:
      sortedData = blogData?.toSorted(
        (post1, post2) => post2.reactions.likes - post1.reactions.likes
      );
      break;
    case FILTER_CONSTANT.VIEWS:
      sortedData = blogData?.toSorted((post1, post2) => post2.views - post1.views);
      break;
    default:
      sortedData = blogData;
  }
  return sortedData;
};

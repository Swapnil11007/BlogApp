export const FILTER_CONSTANT = {
  // AUTHOR: "Author",
  TITLE: "Title",
  NO_OF_LIKES: "Number Of Likes",
  VIEWS: "Views",
};

export const filterHandler = (type, blogData) => {
  let sortedData;
  switch (FILTER_CONSTANT[type]) {
    // case FILTER_CONSTANT.AUTHOR:
    //     return blogData.sort()
    case FILTER_CONSTANT.TITLE:
      sortedData = blogData.sort((post1, post2) => post1.title > post2.title ? 1 : -1);
      break;
    case FILTER_CONSTANT.NO_OF_LIKES:
      sortedData = blogData.sort(
        (post1, post2) => post1.reactions.likes - post2.reactions.likes
      );
      break;
    case FILTER_CONSTANT.VIEWS:
      sortedData = blogData.sort((post1, post2) => post1.views - post2.views);
      break;
    default:
      sortedData = blogData;
  }
  return sortedData;
};

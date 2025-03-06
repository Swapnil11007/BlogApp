export const getInitialBlogData = async () => {
  try {
    let result = await fetch("https://dummyjson.com/posts");
    result = await result.json();
    return result;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

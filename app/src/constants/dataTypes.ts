export type blogDataType = {
  posts: postDataType[];
  total: number;
  skip: number;
  limit: number;
};

export type postDataType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export type  initialStoreType = {
    blogData: blogDataType,
    savedBlogs: number[]
}
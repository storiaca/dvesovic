export const routes = {
  LOGIN: {
    path: "/",
  },
  REGISTER: {
    path: "/register",
  },
  POSTS: {
    path: "/posts",
  },
  SINGLE_POST: {
    path: "/posts/:id",
    realPath: (id) => `/posts/${id}`,
  },
  POST_TAG: {
    path: "/posts/tag/:tagName",
    realPath: (tagName) => `/posts/tag/${tagName}`,
  },
  POSTS_SEARCH: {
    path: "/posts/search",
  },
};

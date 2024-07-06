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
  POST_TAG: {
    path: "/posts/tag/:tagName",
    realPath: (tagName) => `/posts/tag/${tagName}`,
  },
};

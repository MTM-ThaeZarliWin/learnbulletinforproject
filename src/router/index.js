import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import UserList from "../pages/user/UserList";
import CreateUser from "../pages/user/CreateUser";
import CreateUserConfirm from "../pages/user/CreateUserConfirm";
import CreatePost from "../pages/post/CreatePost";
import CreatePostConfirm from "../pages/post/CreatePostConfirm";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/post/list",
    name: "post-list",
    component: PostList,
  },
  {
    path: "/post/create",
    name: "create-post",
    component: CreatePost,
  },
  {
    path: "/post/createConfirm",
    name: "create-post-confirm",
    component: CreatePostConfirm,
  },
  {
    path: "/user/list",
    name: "user-list",
    component: UserList,
  },
  {
    path: "/user/create",
    name: "create-user",
    component: CreateUser,
  },
  {
    path: "/user/createConfirm",
    name: "create-user-confirm",
    component: CreateUserConfirm,
  },
  {
    path: "/*",
    redirect: "/post/list",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.isLoggedIn;
  if (!loggedIn && to.name != "login") {
    return next("/login");
  }
  next();
});

export default router;

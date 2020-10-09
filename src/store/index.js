import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
  state: {
    user: null,
    createPostData: null,
    createUserData: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setUserInfoData(state, userData) {
      state.createUserData = userData;
    },
    setPostData(state, postData) {
      state.createPostData = postData;
    },
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post("/auth/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    logout({ commit }, credentials) {
      return axios.post("/auth/logout", credentials).then(() => {
        commit("setUserData", null);
      });
    },
    // createPost({ commit }, credentials) {
    //   return axios.post("/create/post", credentials).then(({ data }) => {
    //     commit("setPostData", data);
    //   });
    // },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    userName: (state) => {
      if (state.user && state.user.name) {
        return state.user.name;
      }
    },
    postList: (state) => state.createPostData,
    userList: (state) => state.createUserData,
  },
  plugins: [createPersistedState()],
});

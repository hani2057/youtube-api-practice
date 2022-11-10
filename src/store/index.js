import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: "AIzaSyBkVwIO8rmu7uMdDtQyEXp25YnWpD5JGao",
    baseUrl: "https://www.googleapis.com/youtube/v3",
    responseData: null,
    videoList: null,
    mainVideo: null,
  },
  getters: {},
  mutations: {
    SET_RESPONSE_DATA(state, res) {
      state.responseData = res;
    },
    SET_VIDEO_LIST(state, id) {
      const videoList = state.responseData.data.items;

      state.videoList = videoList.filter((video) => video.id.videoId !== id);

      // state.videoList = state.videoList
      //   ? state.videoList.filter((video) => video.id.videoId !== id)
      //   : state.responseData.data.items.filter(
      //       (video) => video.id.videoId !== id
      //     );
    },
    SET_MAIN_VIDEO(state, id) {
      const videoList = state.responseData.data.items;

      state.mainVideo = videoList.find((video) => video.id.videoId === id);

      // state.mainVideo = state.videoList
      //   ? state.videoList.find((video) => video.id.videoId === id)
      //   : state.responseData.data.items[0];
    },
  },
  actions: {
    sendSearchRequest(context, inputData) {
      // encodeURI로 감싸면 영어 한 단어만 제대로 동작함 (필요없음)
      // const searchData = encodeURI(inputData);

      axios({
        method: "get",
        baseURL: context.state.baseUrl,
        url: "/search",
        params: {
          part: "snippet",
          q: inputData,
          key: context.state.API_KEY,
          type: "video",
        },
      })
        .then((res) => {
          const mainVideoId = res.data.items[0].id.videoId;
          console.log(res);

          context.commit("SET_RESPONSE_DATA", res);
          // console.log("SET_RESPONSE_DATA done");

          context.commit("SET_VIDEO_LIST", mainVideoId);
          // console.log("SET_VIDEO_LIST done");

          context.commit("SET_MAIN_VIDEO", mainVideoId);
          // console.log("SET_MAIN_VIDEO done");
        })
        .catch((err) => console.error(err));
    },
    handleClick(context, videoId) {
      context.commit("SET_MAIN_VIDEO", videoId);
      context.commit("SET_VIDEO_LIST", videoId);
    },
  },
  modules: {},
});

<template>
  <div id="app">
    <nav>
      <h1>Youtube API Project</h1>
      <TheSearchBar />
    </nav>
    <div class="container" v-if="videoList">
      <div class="row">
        <div class="col">
          <VideoDetail id="videoDetail" />
        </div>
        <div class="col">
          <VideoList id="VideoList" />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheSearchBar from "@/components/TheSearchBar.vue";
import VideoDetail from "@/components/VideoDetail.vue";
import VideoList from "@/components/VideoList.vue";

export default {
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  computed: {
    videoList() {
      return this.$store.state.videoList;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

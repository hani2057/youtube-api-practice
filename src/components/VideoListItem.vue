<template>
  <div @click="handleClick">
    <ul>
      <li><img :src="videoThumbnail" /></li>
      <li>{{ videoTitle }}</li>
    </ul>
  </div>
</template>

<script charset="UTF-8">
import _ from "lodash";

export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  computed: {
    videoThumbnail() {
      return this.video?.snippet.thumbnails.default.url;
    },
    videoTitle() {
      return _.unescape(this.video?.snippet.title);

      // return this.video?.snippet.title;
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch("handleClick", this.video.id.videoId);
    },
  },
};
</script>

<style>
ul {
  display: flex;
  align-items: center;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
}
ul:hover {
  cursor: pointer;
}
li:last-child {
  text-align: left;
  padding-left: 30px;
}
</style>

<template>
  <div>
    <div v-for="(video, idx) in videoList" :key="idx" id="list-wrapper">
      <VideoListItem :video="video" />
    </div>
  </div>
</template>

<script>
import VideoListItem from "@/components/VideoListItem.vue";

export default {
  name: "VideoList",
  computed: {
    videoList() {
      return this.$store.state.videoList;
    },
  },

  components: {
    VideoListItem,
  },
};
</script>

<style>
#list-wrapper {
  width: auto;
}
</style>

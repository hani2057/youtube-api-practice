<template>
  <div>
    <iframe
      type="text/html"
      width="640"
      height="360"
      :src="mainVideoIframeSrc"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  computed: {
    mainVideoIframeSrc() {
      return `https://www.youtube.com/embed/${this.$store.state.mainVideo?.id.videoId}`;
    },
  },
};
</script>

<style></style>

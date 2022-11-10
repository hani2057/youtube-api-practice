<template>
  <div id="nav-wrapper">
    <span>Type and Enter!</span>
    <i class="fa-solid fa-arrow-right"></i>
    <input @keyup.enter="sendSearchRequest" type="text" v-model="inputData" />
  </div>
</template>

<script>
export default {
  name: "TheSearchBar",
  data() {
    return {
      inputData: null,
    };
  },
  methods: {
    sendSearchRequest(e) {
      this.$store.dispatch("sendSearchRequest", this.inputData);
      e.target.value = "";
    },
  },
};
</script>

<style>
#nav-wrapper {
  padding: 40px;
}
i {
  margin: 20px;
}
input {
  width: 35vw;
  height: 30px;
}
</style>

<template>
  <div>
    <h1>big</h1>

    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>

    <!-- <component :is="currentView"></component> -->

    <button @click="change">切换组件</button>
  </div>
</template>

<script>
import Small1 from "./Small1";
import Small2 from "./Small2";
export default {
  name: "",
  components: {
    Small1,
    Small2,
  },
  data() {
    return {
      currentView: "Small1",
    };
  },
  methods: {
    change() {
      if (this.currentView == "Small2") {
        this.currentView = "Small1";
      } else {
        this.currentView = "Small2";
      }
    },
  },
};
</script>

<style lang="" scoped></style>

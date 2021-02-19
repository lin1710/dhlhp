<template>
  <div>
    <h1>small--1</h1>
    <p>{{ msg }}</p>
    <button @click="change">keepalive</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "我是子组件1",
      state: true,
    };
  },
  methods: {
    change() {
      if (this.state == true) {
        this.msg = "使用keep---alive后";
        this.state = false;
      } else {
        this.msg = "我是子组件1";
        this.state = true;
      }
    },
  },
};
</script>

<style lang="" scoped></style>

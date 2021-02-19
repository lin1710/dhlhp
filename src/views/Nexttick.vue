<template>
  <div id="demo">
    <ul ref="qq">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="push">push</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    push() {
      this.list.push(100);
      let ul = this.$refs.qq;
      console.log("DOM未被渲染完成");
      console.log(ul.childNodes);
      this.$nextTick(function() {
        console.log("DOM已经渲染完成");
        console.log(ul.childNodes);
      });
    },
  },
};
</script>

<style lang="" scoped></style>

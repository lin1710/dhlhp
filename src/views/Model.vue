<template>
  <div>
    <h2>自定义model</h2>
    <p>在home中引用使用,调用计算事件,加10减5</p>
    <button @click="changeNum(-5)">-</button>
    <span>{{ currentVal }}</span>
    <button @click="changeNum(10)">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    currentVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    changeNum(val) {
      this.currentVal += val;
    },
  },
};
</script>
<style></style>

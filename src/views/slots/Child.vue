<template>
  <div class="child">
    <h2>子组件</h2>
    <slot name="a1"></slot>
    <hr />
    <slot name="a2"></slot>
    <hr />

    <slot
      name="a3"
      text="子组件将数据传递传递给父组件,父组件用slot-scope接收"
    ></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>

<style lang="" scoped></style>

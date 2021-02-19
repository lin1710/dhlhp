<template>
  <div class="parent">
    <h2>父组件</h2>
    <Child>
      <p slot="a1">我是插槽1</p>
      <p slot="a2">我是插槽2</p>
      <p slot="a3" slot-scope="key">
        {{ key.text }}
      </p>
    </Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "",
  components: {
    Child,
  },
  data() {
    return {};
  },
};
</script>

<style lang="" scoped></style>

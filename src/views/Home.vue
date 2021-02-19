<template>
  <div class="home">
    <h2>自定义model</h2>
    <model v-model="valueInput"></model>
    <hr />
    <h3>调用vuex中的数据,在vuex组件中做数据修改</h3>
    {{ homeNum }}
  </div>
</template>

<script>
import Model from "./Model";
export default {
  components: {
    Model,
  },
  data() {
    return {
      valueInput: 0,
      homeNum: this.$store.state.count,
    };
  },
  watch: {
    valueInput(val) {
      console.log(val); // 在这里可以监听到值的变化
    },
  },

  methods: {},
};
</script>

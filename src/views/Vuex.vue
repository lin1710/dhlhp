<template>
  <div>
    <button @click="reducevuex">-</button>
    <p>获取vuex中的数据 {{ getCount }}</p>

    <button @click="addvuex">+</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    getCount() {
      return this.$store.state.count;
    },
  },
  methods: {
    addvuex() {
      //   this.$store.commit("add");
      this.$store.dispatch("add");
    },
    reducevuex() {
      //   this.$store.commit("reduce");
      this.$store.dispatch("reduce");
    },
  },
};
</script>

<style lang="" scoped></style>

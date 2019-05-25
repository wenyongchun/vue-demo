<template>
  <div>
    <p>点了{{count}}次 count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="evenIncrement">偶数+</button>
    <button @click="asyncIncrement">异步+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import ajax from "./api";

export default {
  computed: {
    ...mapGetters(["evenOrOdd"]),
    ...mapState(["count"])
  },
  methods: {
    async testAjax() {
      const data = {
        number: 1012002
      };
      const result = await ajax("https://api.apiopen.top/EmailSearch", data);
      console.log(result)
    },
    ...mapActions({
      increment: "increment",
      decrement: "decrement",
      evenIncrement: "evenIncrement",
      asyncIncrement: "asyncIncrement"
    })
  },

  mounted() {
    this.testAjax()
  }
};
</script>

<style>
</style>

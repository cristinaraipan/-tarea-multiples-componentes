<template>
  <div id="CounterGame">
    <p>{{ count }}</p>
    <button @click="onClick()">Click me</button>
    <h1 id="titulo">Counter Game</h1>
    <h3 id="resultado">Clicks: {{ cantidadClicks }} Hover: {{ cantidadHovered }}</h3>
    <button @click="contarClick()" @mouseenter="sobreBoton()">Clickea!</button>
  </div>
</template>
<script>
export default {
  name: "CounterGame",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  props: {},
  data: function () {
    return {
      cantidadClicks: 0,
      cantidadHovered: 0,
    };
  },
  methods: {
    contarClick() {
      this.cantidadClicks++;
      localStorage.setItem("cantidadClick", this.cantidadClicks);
    },
    sobreBoton() {
      this.cantidadHovered++;
      localStorage.setItem("cantidadHover", this.cantidadHovered);
    },
    onClick() {
      this.$store.commit("increment");
    },
  },
};
</script>
<style scoped>
#titulo {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
}
#CounterGame {
  border: 7px solid red;
  border-radius: 25%;
  margin: auto;
  padding: 10px;
  width: 49%;
  margin-top: 10px;
  background: grey;
}
</style>
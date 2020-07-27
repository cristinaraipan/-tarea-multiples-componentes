<template>
  <div id="app">
    <img id="imagen" alt="Vue zorro" src="./assets/zorro.png">
    <MiLista msg="Sophie's List of  Things to learn!"/>
    <Formulario />
  </div>
</template>

<script>
import MiLista from './components/MiLista.vue'
import Formulario from './components/Formulario.vue'
export default {
  name: 'App',
  components: {  
    MiLista,
    Formulario,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#imagen{
  text-align: center;
  width: 200px;
  height: 200px;
}
</style>

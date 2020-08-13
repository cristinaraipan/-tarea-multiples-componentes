<template>
  <div id="app">
    <header>
      <router-link class="link" to="/Formulario">Formulario</router-link>
      <router-link class="link" to="/CounterGame">Counter Game</router-link>
      <router-link class="link" to="/NinjaOro">NinjaOro</router-link>
      <router-link class="link" to="/">Mi Lista</router-link>
      <router-link class="link" to='/Peliculas'>Peliculas</router-link>
    </header>
    <img id="imagen" alt="Vue zorro" src="./assets/zorro.png">
   <!--  <MiLista msg="Sophie's List of  Things to learn!"/>
    <Formulario />
    <CounterGame/>
    <NinjaOro :totalOro="totalOro" :historial="historial" /> -->
    <router-view />
  </div>
</template>

<script>
/* import MiLista from './components/MiLista.vue'
import Formulario from './components/Formulario.vue'
import CounterGame from './components/CounterGame.vue'
import NinjaOro from './components/NinjaOro.vue'*/
import store from "@/store"  
export default {
  name: 'App',
  components: {  
    /* MiLista,
    Formulario,
    CounterGame,
    NinjaOro */
  },
  data(){
    return store.state;
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
.link{
  padding: 15px;
  text-decoration: none;
}
</style>

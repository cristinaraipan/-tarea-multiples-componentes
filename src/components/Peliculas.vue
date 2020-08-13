<template>
  <div id="Peliculas">
    <h1>Peliculas</h1>
    <div id="menu">
      <router-link class="link" to= "/ComedyMovieList">
      Peliculas Comedia
      </router-link>
      <router-link class="link" to= "/FamilyMovieList">
      Peliculas Familiares
      </router-link>
      
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
/* import store from '/@store'; */
export default {
  name: "Peliculas",
  props: {
    id: Number,
  },
};
</script>
<style scoped>
</style>
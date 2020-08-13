<template>
<div id="ComedyMovieList">
      <h2>Comedia</h2>
      <ul>
        <li v-for= "movie in comedyMovies" v-bind:key= "movie.id">{{ movie.title }}</li>
      </ul>
      <router-view></router-view>
</div>
</template>
<script>
/* import store from "/@store"; */
export default {
  name: "ComedyMovieList",
  props:{
      id: Number
  },
  computed: {
    comedyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Comedy");
    }
  }
};
</script>
<style scoped>
ul{
  margin-left: auto;
  margin-right: auto;
  padding-inline-start: 0%;
}

</style>
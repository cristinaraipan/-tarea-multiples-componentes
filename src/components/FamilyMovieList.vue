<template>
    <div id="FamilyMovieList">
        <h2>Familiar</h2>
      <ul>
        <li v-for= "movie in familyMovies" :key= "movie.id">{{ movie.title }}</li>
      </ul>
      <router-view/>
    </div>
</template>
<script>
/* import store from '/@store'; */
export default {
    name: "FamilyMovieList",
    props:{
        id: Number
    },
    computed: {
        familyMovies() {
        return this.$store.state.movies.filter(movie => movie.genre === "Family");
    }
  }
}
</script>
<style scoped>
ul{
   padding-inline-start: 0%;
}
</style>
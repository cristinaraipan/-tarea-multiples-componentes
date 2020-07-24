<template>
  <div class="hello">
      <h1>{{msg}}</h1>
        <h3>Tech</h3>
      <ul>
        <li v-for= "cosa in tech" v-bind:key= "cosa.name">{{cosa.name}}</li>
      </ul>
      <h3>Financial</h3>
      <ul>
        <li v-for= "cosa in financial" :key= "cosa.name">{{cosa.name}}</li>
      </ul>
    
  </div>
</template>

<script>
export default {
  name: "MiLista",
  props: {
    msg: String,
  },
  data(){
    return{
    tech: [
            {
                name: "HTML",
            },
            {
                name: "CSS",
            },
            {
                name: "Vue",
            },
            {
                name: "Firebase",
            },
            
        ],
        financial: [
            {
                name: "investing"
            },
            {
                name: "budgeting"
            },
            {
                name: "balancing a checkbook"
            }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

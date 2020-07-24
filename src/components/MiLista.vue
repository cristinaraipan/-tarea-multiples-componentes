<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h3>Tech</h3>
    <ul>
      <li v-for="cosa in tech" v-bind:key="cosa.name">
        <a target="_blank" v-bind:href="cosa.enlace">{{ cosa.name }}</a>
      </li>
    </ul>
    <h3>Financial</h3>
    <ul>
      <li v-for="cosa in financial" :key="cosa.name">
        <a target="_blank" v-bind:href="cosa.enlace">{{ cosa.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MiLista",
  props: {
    msg: String,
  },
  data() {
    return {
      tech: [
        {
          name: "HTML",
          enlace: "https://www.w3schools.com/html/",
        },
        {
          name: "CSS",
          enlace: "https://www.w3schools.com/html/html_css.asp",
        },
        {
          name: "Vue",
          enlace: "https://vuejs.org",
        },
        {
          name: "Firebase",
          enlace: "https://firebase.google.com",
        },
      ],
      financial: [
        {
          name: "investing",
          enlace: "https://es.investing.com"
        },
        {
          name: "budgeting",
          enlace: "https://www.mymoneycoach.ca/budgeting/what-is-a-budget-planning-forecasting"
        },
        {
          name: "balancing a checkbook",
          enlace: "https://www.linguee.com/english-spanish/translation/balance+a+checkbook.html"
        },
      ],
    };
  },
};
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

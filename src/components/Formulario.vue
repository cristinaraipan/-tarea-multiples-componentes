<template>
  <div id="formulario">
    <form action method="POST">
      <h1>Encuesta</h1>
      <table>
        <tr>
          <td>Nombre:</td>
          <td>
            <input type="text" v-model="nombre" />
          </td>
        </tr>
        <tr>
          <td>Dojo location:</td>
          <td>
            <select v-model="location">
              <option value="1">Sidney</option>
              <option value="2">Seatle</option>
              <option value="3">Online</option>
              <option value="4">San Francisco</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Favorite Laguage:</td>
          <td>
            <select v-model="categoria">
              <option value="1">Javascript</option>
              <option value="2">Python</option>
              <option value="3">Java</option>
              <option value="4">C++</option>
            </select>
          </td>
        </tr>
        <tr>
            <td>
                Comments:
            </td>
            <td>
                <textarea cols="22" rows="4" v-model="desc"></textarea>
            </td>
        </tr>
      </table>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  props: {},
  data: function () {
    return {
      nombre: "",
      location: 0,
      categoria: 2,
      desc: "Descripción por defecto",
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

table{
    margin: auto;
}
td{
    text-align: left;
}
select{
    width: 100%;
}
#formulario{
    width: 50%;
    border: 1px solid black;
    margin: auto;
}
</style>

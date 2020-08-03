<template>
  <div id="NinjaOro">
    <h1 id="titulo">Ninja Oro</h1>
    <div id="caja1">tu oro es: {{ totalOro }}</div>
    <div id="contenedor">
      <div id="caja2">
        <h2 id="subtitulo">Farm</h2>
        <p>(earns 10-20 golds)</p>
        <button @click="agregarOro(1), cantidadOro('farm')">Find Gold</button>
      </div>
      <div id="caja2">
        <h2 id="subtitulo">Cave</h2>
        <p>(earns 5-10 golds)</p>
        <button @click="agregarOro(2), cantidadOro('cave')">Find Gold</button>
      </div>
      <div id="caja2">
        <h2 id="subtitulo">House</h2>
        <p>(earns 2-5 golds)</p>
        <button @click="agregarOro(3), cantidadOro('house')">Find Gold</button>
      </div>
      <div id="caja2">
        <h2 id="subtitulo">Casino</h2>
        <p>(earns/takes 0-50 golds)</p>
        <button @click="agregarOro(4), cantidadOro('casino')">Find Gold</button>
      </div>
    </div>
    <div id="resultados">
      <h4>Activitues:</h4>
      <div id="totales">
        <p>Earned {{ historial }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "NinjaOro",
  props: {
    totalOro: Number,
    oroActual: Number,
    /* mostrar: Boolean, */
    historial: Array,
  },

  methods: {
    agregarOro(opcion) {
      store.agregarOro(opcion);

    },
    cantidadOro(opcion) {
      store.cantidadOro(opcion);
     /*  store.mostrar(opcion); */
    },
    
  },
};
</script>
<style scoped>
#NinjaOro {
  width: 66%;
  margin: auto;
}
#titulo {
  color: black;
}
#contenedor {
  display: flex;
}
#caja1 {
  border: 1px solid black;
  width: 150px;
  margin: auto;
}
#caja2 {
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin: 10px;
}
#resultados {
  border: 1px solid black;
  text-align: left;
  padding-left: 10px;
}
</style>
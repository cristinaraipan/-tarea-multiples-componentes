export default {
    state: {
        totalOro: 0,
        oroActual: 0,
        /* mostrar: false, */
        historial: [],
    },
    cantidadOro(opcion){
        /* this.state.mostrar = true; */
        if (opcion == 'farm') {
            this.state.oroActual = this.randomInteger(10, 20);
        }
        if (opcion == 'cave') {
            this.state.oroActual = this.randomInteger(5, 10);
        }
        if (opcion == 'house') {
            this.state.oroActual = this.randomInteger(2, 5);
        }
        if (opcion == 'casino') {
            this.state.oroActual = this.randomNegativos(-50, 50);
        }
        let obj = {};
        obj.oroActual = this.state.oroActual;
        obj.origen = opcion;
        this.state.historial.push(obj);
        console.log(this.state.historial);
        
    },
    agregarOro(opcion) {
        /* this.state.mostrar = true; */
        if (opcion == 1) {
            this.state.totalOro += this.randomInteger(10, 20);
        }
        if (opcion == 2) {
            this.state.totalOro += this.randomInteger(5, 10);
        }
        if (opcion == 3) {
            this.state.totalOro += this.randomInteger(2, 5);
        }
        if (opcion == 4) {
            this.state.totalOro += this.randomNegativos(-50, 50);
        }
    },
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomNegativos(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    /* fechaActual(){
        this.state.fehcaIngreso = Date();

    } */

};

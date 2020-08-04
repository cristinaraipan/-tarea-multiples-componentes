export default {
    state: {
        totalOro: 0,
        historial: [],
    },
   
    agregarOro(opcion) {
        let oroActual= 0;
        
        if (opcion == "farm") {
            oroActual = this.randomInteger(10, 20);
            this.state.totalOro += oroActual;
        }
        if (opcion == "cave") {
            oroActual = this.randomInteger(5, 10);
            this.state.totalOro += oroActual;
        }
        if (opcion == "house") {
            oroActual = this.randomInteger(2, 5);
            this.state.totalOro += oroActual;
        }
        if (opcion == "casino") {
            oroActual = this.randomInteger(-50, 50);
            this.state.totalOro += oroActual;
        }
        
        let obj = {};
        if( oroActual >= 0){
            obj.resultado = "Earned";
        }else{
            obj.resultado = 'Lost';
        }
        //oroActual >= 0 ? obj.resultado = "Earned" : obj.resultado ="Lost";
        obj.oroActual = oroActual;
        obj.origen = opcion;
        obj.fechaActual = new Date();
        this.state.historial.push(obj);
        console.log(this.state.historial);
        
    },
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomNegativos(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
};

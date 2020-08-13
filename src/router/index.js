import Vue from 'vue';
import VueRouter from 'vue-router';


import MiLista from '../components/MiLista';  // asumiendo que hicimos este componente
/* import { component } from 'vue/types/umd'; */
import NinjaOro from '../components/NinjaOro';
import Formulario from '../components/Formulario';
import CounterGame from '../components/CounterGame';
import Peliculas from '../components/Peliculas';
import FamilyMovieList from '../components/FamilyMovieList';
import ComedyMovieList from '../components/ComedyMovieList';
import NoEncontrada from '../components/NoEncontrada';
Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: MiLista
        },
        {
            path: '/NinjaOro',
            component: NinjaOro
        },
        {
            path: '/Formulario',
            component: Formulario
        },
        {
            path: '/CounterGame',
            component: CounterGame
        },
        {
            path:'/Peliculas',
            component: Peliculas,
            name: 'Peliculas',
            props: true,
            children: [
                {
                    path: '/FamilyMovieList',
                    component: FamilyMovieList,
                    name: FamilyMovieList,
                    props: true
                },
                {
                    path: '/ComedyMovieList',
                    component: ComedyMovieList,
                    name: ComedyMovieList,
                    props: true
                }
            ]
        },
        {
            path: '*',
            component: NoEncontrada
        }
    ]
})
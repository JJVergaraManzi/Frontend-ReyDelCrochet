import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacto from '../views/Contacto.vue'
import Tienda from '../views/Tienda.vue'
import Home from '../views/Home.vue'
import Carritojaja from '../views/Carritojaja.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

import Agujas from '../views/Tiendaproductos/Agujas.vue'
import Accesorios from '../views/Tiendaproductos/Accesorios.vue'
import Crochet from '../views/Tiendaproductos/Crochet.vue'
import Lanas from '../views/Tiendaproductos/Lanas.vue'
import LanasBaby from '../views/Tiendaproductos/LanasBaby.vue'
import Palillos from '../views/Tiendaproductos/Palillos.vue'
import Tijeras from '../views/Tiendaproductos/Tijeras.vue'
import Trapillo from '../views/Tiendaproductos/Trapillo.vue'
import Login from '../views/Login.vue'
import Homedos from '../views/Homedos.vue'

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);

Vue.use(VueAxios, axios);
Vue.use(VueRouter)

const routes = [
  {
    path: '/tienda',
    name: 'tienda',
    component: Tienda
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/carritojaja',
    name: 'carritojaja',
    component: Carritojaja
  },
  {
    path: '/agujas',
    name: 'agujas',
    component: Agujas
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: Accesorios
  },
  {
    path: '/crochet',
    name: 'crochet',
    component: Crochet
  },
  {
    path: '/lanas',
    name: 'lanas',
    component: Lanas
  },
  {
    path: '/lanasbaby',
    name: 'lanasbaby',
    component: LanasBaby
  },
  {
    path: '/palillos',
    name: 'palillos',
    component: Palillos
  },
  {
    path: '/tijeras',
    name: 'tijeras',
    component: Tijeras
  },
  {
    path: '/trapillo',
    name: 'trapillo',
    component: Trapillo
  },{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/homedos',
    name: 'homedos',
    component: Homedos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

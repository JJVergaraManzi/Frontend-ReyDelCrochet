import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../views/Orders.vue'
import Import from '../views/Import.vue'
import Home from '../views/Home.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';


import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme);

Vue.use(VueAxios, axios);
Vue.use(VueRouter)

const routes = [
  {
    path: '/import',
    name: 'import',
    component: Import
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

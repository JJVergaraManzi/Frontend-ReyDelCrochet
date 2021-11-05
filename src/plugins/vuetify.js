import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import VueGoogleCharts from 'vue-google-charts';

Vue.use(VueGoogleCharts)
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
    icons: {
        iconfont: 'md' || 'fa'
    },
});

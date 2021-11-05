<template>
    <v-navigation-drawer permanent floating dark app src="../assets/lanafondo2.jpg" >
      <v-list>
        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item router to="/Login">
          <v-list-item-icon>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Homedos</v-list-item-title>
        </v-list-item>

        <v-list-item  router to="/contacto">
          <v-list-item-icon>
            <v-icon>fas fa-phone-alt</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>

        <v-list-item router to="/tienda">
            <v-list-group
              :value="false"
              prepend-icon="fas fa-store">

              <template v-slot:activator>
                <v-list-item-title>Tienda</v-list-item-title>
              </template>

                <v-list-item router to="/agujas">
                  <v-list-item-icon>
                    <v-icon>fas fa-cut</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Agujas</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/accesorios">
                  <v-list-item-icon>
                    <v-icon>fas fa-bowling-ball</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Accesorios</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/crochet">
                  <v-list-item-icon>
                    <v-icon>fas fa-feather</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Crochet</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/lanas">
                  <v-list-item-icon>
                    <v-icon>fas fa-dove</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>lanas</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/lanasbaby">
                  <v-list-item-icon>
                    <v-icon>fas fa-bowling-ball</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>LanasBaby</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/palillos">
                  <v-list-item-icon>
                    <v-icon>fas fa-bowling-ball</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Palillos</v-list-item-title>
                </v-list-item>
                
                <v-list-item router to="/tijeras">
                  <v-list-item-icon>
                    <v-icon>fas fa-bowling-ball</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Tijeras</v-list-item-title>
                </v-list-item>

                <v-list-item router to="/trapillo">
                  <v-list-item-icon>
                    <v-icon>fas fa-bowling-ball</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Trapillo</v-list-item-title>
                </v-list-item>
            
            </v-list-group>
        </v-list-item>
      </v-list>
      <v-container fluid>
        <v-row>
          <v-col        
          cols="12"
          sm="12"
          md="6"
          offset-md="3">
            <v-card>
                <v-fab-transition>
                  <v-btn router to="/carritojaja" color="cyan accent-3"
                  dark
                  absolute
                  top
                  right
                  fab>
                    <v-icon dark>
                      fa fa-shopping-cart
                    </v-icon>
                  </v-btn>                
                </v-fab-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
</template>

<script>
import Cookies from "js-cookie";
export default {
  methods: {
    deleteUserLogged() {
      Cookies.remove('userLogged');
    },
    logout() {
      localStorage.clear();
      this.deleteUserLogged()
      this.$router.push('/login');
    }
  }
}
</script>
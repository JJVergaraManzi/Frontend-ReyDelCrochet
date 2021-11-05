<template>
  <v-parallax 
    height="900" 
    dark
    position: absolute
    src="../assets/lanafondo.jpg">
      <v-row 
      justify="center"          
      align="center">
        <v-col
          cols="12"
          sm="10"
        >
          <v-card>
            <v-card-title class="purple darken-3">
              <span class="text-h5 white--text">Sergio Morales</span>
            </v-card-title>

            <v-list class="purple lighten-1">
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="text-h5 white--text">+56 9 89742833</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="text-h6 white--text">ROMEO 4195-A, PEDRO AGUIRRE CERDA</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
  </v-parallax>
</template>
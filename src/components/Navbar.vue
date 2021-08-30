<template>
  <v-card
    class="mx-auto"
    width="300"
  >
  <v-navigation-drawer permanent dark app  class="blue lighten-1" >
    <v-list>
      <v-list-item router to="/">
        <v-list-item-icon>
          <v-icon>fas fa-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>

      <v-list-item  router to="/orders">
        <v-list-item-icon>
          <v-icon>fas fa-phone-alt</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Contacto</v-list-item-title>
      </v-list-item>


      <v-list-group
        :value="true"
        prepend-icon="fas fa-store"
      >
        <template v-slot:activator>
          <v-list-item-title>Tienda</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Ovillos</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item  
            v-for="([title], i) in ovillos"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            
          </v-list-item>
        </v-list-group>

        
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      ovillos: [
        ['Lana'],
        ['Algodón'],
      ],

    }),
  }
</script>
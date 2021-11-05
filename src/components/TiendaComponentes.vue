<template>
  <div class="container">
   <h1>Bienvenido</h1>
   <div class="global">
 
    <div class="prod">
      <producto v-for="producto in productos" :producto="producto" :key="producto.id"></producto>
    </div>
    </div>
  </div>
</template>

<script>
import producto from '../components/Productotest'
export default {
  components:{producto},
  data () {
    return {
      productos: [
        { id:1, nombre:'primer producto', precio: 45, img:'producto.jpg' },
         { id:2, nombre:'segundo producto', precio: 20, img:'producto.jpg' },
         { id:3, nombre:'tercer producto', precio: 15, img:'producto.jpg' },
         { id:4, nombre:'cuarto producto', precio: 25, img:'producto.jpg' },
         { id:5, nombre:'quinto producto', precio: 20, img:'producto.jpg' },
         { id:6, nombre:'sexto producto', precio: 30, img:'producto.jpg' }]
    }
  }
}
</script>

<style>
body {
  background: #eee;
}
.global {
  display:flex;
  justify-content: space-between
}
.prod {
  width: 65%;
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap
}
.carrito {
  width: 30%;
  background-color:#EEEEEE;
}
</style>
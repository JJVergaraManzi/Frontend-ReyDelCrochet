<template>
  <div class="container">
   <h1>Bienvenido</h1>
   <div class="global">
      <div class="carrito">
        <carrito-compra></carrito-compra>
      </div>
    </div>
  </div>
</template>

<script>
import CarritoCompra from './Carritotest.vue'
export default {
  components:{CarritoCompra},
  data () {
    return 
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
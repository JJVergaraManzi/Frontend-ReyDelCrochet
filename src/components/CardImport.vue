<template>
  <div>
    <template >
    <v-card class="mx-auto pb-2"> 
      <template v-if="loading ==1">    
      <v-progress-linear
        indeterminate
        color="green"
      ></v-progress-linear>    
      </template>  
      <v-card-title><h4>Contacto</h4></v-card-title>      
      <v-card-subtitle class="pt-1 pb-3">
      Empresa familiar creada año 2020 dedicada principalmente a la comercialización de productos de coordonería en general, 
      con variedad de productos y buenos precios para nuestros clientes, siempre con buena atención y responsabilidad,
       para dar la mejor confianza en el transcurso de sus compras.
      </v-card-subtitle>
            <v-row
              :align="align"
              no-gutters
            >
            <v-card-text class="text-center">
            <v-icon
              large
              left
              color="green"
            >
              fas fa-file-excel
            </v-icon>
            <span class="title font-weight-light">Import from Excel format .xlsb</span>
          </v-card-text>
          <v-card-actions>
          <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls, .xlsb" @change="handleClick">
          <div class="drop mx-auto" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
            Drop excel file here or
            <el-button :loading="loading" style="margin-left:16px;" size="mini" type="primary" @click="handleUpload">
              Browse
            </el-button>
          </div>    
          </v-card-actions>
    </v-row>
    </v-card>
    <template v-if="loading">
    <v-card-subtitle class="text-left red p-2 text-white">Loading, please wait a moment...</v-card-subtitle>
    </template>
    <template v-else-if="completeLoading">
    <v-card-subtitle class="text-left red p-2 text-white">Ready</v-card-subtitle>
    </template>
    </template>
    <template>  
      <div></div>
    </template>
  </div>
  
</template>

<script>

</script>

<style scoped>
.excel-upload-input{
  display: none;
  z-index: -9999;
}
.drop{
  border: 2px dashed rgb(35, 151, 20);
  width: 400px;
  height: 160px;
  line-height: 160px;
  font-size: 22px;
  border-radius: 5px;
  text-align: center;
  color: rgb(117, 117, 117);
  position: relative;
}
</style>
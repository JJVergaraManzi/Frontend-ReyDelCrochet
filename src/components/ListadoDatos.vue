<template>
    <div>
        <div>Listado datos</div>
        <div v-for="dato in listadoDatos" :key="dato.id">
            {{ dato }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        listadoDatos: []
    },
    mounted(){
        this.$store.dispatch('obtenerListadoDatos').then(response => {
            this.listadoDatos = response;
        });
    },
};
</script>

<style>
</style>

<template>
  <div class="x-center error404">
    <h1>La página que está buscando podría haberse eliminado <span class="xf-xpend">o no está disponible temporalmente.</span></h1><br>
    <nuxt-link to="/"><span class="x-btn">Volver al inicio</span></nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  data(){
    return{
      site: {
          titulo: "Error - Pagina no encontrada",
        }
    }
    },
   head () {
    return {
      title: this.site.titulo,
    }
  }
}
</script>
<style scoped>
.error404{
    padding-top: 15%;
}
</style>
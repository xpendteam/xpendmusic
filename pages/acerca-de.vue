<template>
  <div class="about container x-mt-2">
    <div class="quienes-somos art-bio" v-html="Acercade.descripcion"></div>
  </div>
</template>
<script>
import axios from 'axios'
var urlArtistas = 'https://raw.githubusercontent.com/xpedn/xpedn.github.io/master/dt/xm-data.json'
export default {
  name: 'Inicio',
  created: function(){
    this.getArtistas();
  },
  data(){
    return{
      Acercade: [],
      site: {
          titulo: "Acerca de - Xpend Music",
          img: "https://xpendmusic.com/assets/img/og-image.png",
          descripcion: "¿Que es Xpend Music?. Xpend Music es un sello discográfico independiente, fundado por Frank Alvarez en el año 2017. Esta discográfica esta enfocada en el genero de la Musica Electronica, principalmente en el Future Bass y Melodic."
        }
    }
  },
  methods: {
    getArtistas: function(){
      axios.get(urlArtistas).then(response =>{
        this.Acercade = response.data.site
      });
    }
  },
  head () {
    return {
      title: this.site.titulo,
      meta: [
        { hid: 'description', name: 'description', content: this.site.descripcion},
        {property: 'og:title', content: this.site.titulo},
        {property: 'og:image', content: this.site.img},
        {property: 'og:description', content: this.site.descripcion},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:title', content: this.site.titulo},
        {name: 'twitter:site', content: '@xpendmusic'},
        {name: 'twitter:description', content: this.site.descripcion},
        {name: 'twitter:image', content: this.site.img}
      ]
    }
  }   
}
</script>
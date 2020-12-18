<template>
<div class="main-demos">
    <p class="xf-gris x-center">PROMOCION EN YOUTUBE</p>
    <div class="demo">
<h1 class="xf-2 xf-blanco x-center"><i class="fas fa-frown"></i> CERRADO TEMPORALMENTE</h1><br>
<p class="xf-gris x-center">Xpend Music ya no aceptara mas promociones de hoy en adelante hasta nuevo aviso. Pero aun seguiremos buscando artistas con talento para poder apoyarlos, si quieres tener la posibilidad de ser uno de ellos solo debes de utilizar el hashtag <a href="https://www.instagram.com/explore/tags/xpendmusic/" target="_blank"><span class="xf-blanco">#xpendmusic</span></a> para poder encontrarte. Esto puede ser en Instagram, SoundCloud  o YouTube.</p>
</div>
</div>
</template>
<script>
export default {
    name:'PromocionYoutube',
    data() {
      return {
        site: {
          titulo: "Promocion YouTube - Xpend Music",
          img: "https://xpendmusic.com/assets/img/og-image.png",
          descripcion: "Si eres productor de musica electronica puedes enviarnos tu musica, para subirlo a nuestro canal de YouTube"
        }
      };
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
<style>
.main-demos{
  background-image: linear-gradient(rgba(0, 0, 0, 0.6),  var(--xpend-bg)),
  url(https://images.unsplash.com/photo-1551288449-085e5252e44e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80);
  padding: 20px 40px;
}
</style>
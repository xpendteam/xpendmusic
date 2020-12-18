<template>
<div><br>
  <h1 class="x-center">SESSIONS</h1>
  <section class="container sessions">
    <input class="searchButton" type="text" placeholder="Buscar" v-model="name" @input="name = $event.target.value.toUpperCase()"><br><br>
    <div v-for="session in searchSession" :key="session">
      <div class="line">
        <span :id="session.slug"></span>
        <iframe class="mixcloud__inframe" width="100%" height="120" :src="'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fxpendmusic%2F'+session.slug+'%2F'" frameborder="0" ></iframe>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import axios from 'axios'
var urlDataXpend = 'https://api.mixcloud.com/xpendmusic/playlists/xpend-sessions/cloudcasts/';

export default {
  name: 'Sessions',
  created: function(){
    this.getData()
  },
  data(){
    return{
      sessions: [],
      name: '',
      site: {
          titulo: "Sessions - Xpend Music",
          img: "https://xpendmusic.com/assets/img/og-image.png",
          descripcion: "Escucha todas las sesiones de Xpend Music"
        }
    }
  },
  methods: {
    getData: function(){
      axios.get(urlDataXpend).then(response =>{
        this.sessions = response.data.data
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
  },
  computed: {
      searchSession: function () {
          return this.sessions.filter((item) => item.name.toUpperCase().includes(this.name));
      }
  }
}
</script>
<style scoped>
.last-session{
  padding: 40px 0px;
  background-image:
  linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),
  url(https://images.pexels.com/photos/4432185/pexels-photo-4432185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1500);
  background-position: center bottom;
}
.mixcloud__inframe{
  border-radius: 10px;
}
.last-session__item{
  position: relative;
  width: 100%;
}
.last-session__img{
  width: 250px;
  height: 250px;
  text-align: center;
  display: block;
}
.last-session__tag{
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  padding: 3px 6px;
  background-color: #943fff;
}
.sessions{
  margin-top: 40px;
}
.searchButton {
  width: 30%;
  border: none;
  padding: 6px 8px;
  outline: none;
  color: #8a8a8a;
  border-radius: 4px;
}
.searchButton:focus{
  color: var(--xpend-primary);
}
@media only screen and (max-width: 760px){
  .last-session-container__tag{
    text-align: center;
  }
  .searchButton{
    width: 100%;
  }
}
.line {
  width: 100%;
  height: 120px;
  margin-top: 12px;
  border-radius: 11px;
  background-image: linear-gradient(90deg, #25292c 0px, rgba(55, 61, 66, 0.8) 40px, #25292c 80px);
  background-size: 600px;
  animation: shine-lines 2s infinite ease-out;
}
@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
}
@keyframes shine-avatar {
  0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 208px;
  }
}

</style>
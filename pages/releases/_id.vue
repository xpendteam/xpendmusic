<template>
    <div class="container x-mt-2">
        <div class="center-flex">
            <div>
                <div class="center-flex">
                    <div style="width: 250px">
                        <a :href="release.url" target="_blank">
                        <img class="portadas_main" style="width: 100%" :src="release.image" :alt="release.nombre" :title="'Escuchar ' + release.name">
                        </a>
                    </div>
                </div>
                <div class="cover2 x-center">
                    <h5 class="d-release ccc3" style="color: rgb(126, 126, 126);">
                      <span v-if="release.type == 'album'">
                        Álbum
                      </span>
                      <span v-else-if="release.type == 'ep'">
                        EP
                      </span>
                      <span v-else>
                        Sencillo
                      </span>
                       • {{release.year}}</h5>
                    <h3 class="a-release">
                    <span v-for="(artist, index) in release.artists" :key="index">
                        <span v-if="release.artists.length != 1">
                        <span v-if="index != release.artists.length - 1">
                            <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}, </nuxt-link>
                        </span>
                        <span v-else>
                            <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>
                        </span>
                        </span>
                        <span v-else>
                        <nuxt-link style="color: #fff" :to="artist.key">{{artist.name}}</nuxt-link>
                        </span>
                    </span>
                    </h3>
                    <a :href="release.url" target="_blank"><h1 class="t-release">{{release.name}}</h1><br></a>
                    <div class="center-flex">
                        <p class="r-btn">
                        <span v-for="(service, index) in release.services" :key="index">
                            <a :href="service.url" target="_blank" title="Disponible en Spotify"><i :class="'fab fa-'+ service.name"></i></a>
                        </span>
                        <a :href="release.url" target="_blank" title="Mas Plataformas"><i class="fas fa-plus-circle"></i></a>
                        </p>
                    </div>
                    <a class="x-btn" :href="release.url" target="_blank"><i class="fa fa-music"></i> ESCUCHAR</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  created: function(){
    this.getData()
  },
  data(){
    return{
      release: []
    }
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://cdn.xpendmusic.com/api/releases/${params.id}`)
      .then(res => {
        return { release_data: res.data }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Artist not found' })
      })
  },
  methods: {
    getData: function(){
      axios.get(`https://cdn.xpendmusic.com/api/releases/${this.$route.params.id}`).then(response =>{
        this.release = response.data;
      });
    },
  },
  head () {
    return {
      title: this.release_data.name + " by " + this.release_data.artists[0].name + " - Xpend Music",
      meta: [
        { hid: 'description', name: 'description', content: 'Escucha '+this.release_data.name + " de " + this.release_data.artists[0].name},
        {property: 'og:title', content: this.release_data.name + " by " + this.release_data.artists[0].name + " - Xpend Music"},
        {property: 'og:image', content: this.release_data.image},
        {property: 'og:description', content: 'Escucha '+this.release_data.name + " de " + this.release_data.artists[0].name},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:title', content: this.release_data.name + " by " + this.release_data.artists[0].name + " - Xpend Music"},
        {name: 'twitter:site', content: '@xpendmusic'},
        {name: 'twitter:description', content: 'Escucha '+this.release_data.name + " de " + this.release_data.artists[0].name},
        {name: 'twitter:image', content: this.release_data.image}
      ]
    }
  }
}
</script>
<style>
.center-flex{
    display: flex;
    justify-content: center;
}
.ccc3{
  font-weight: 600;
}
.ccc3 span{
  color: rgb(126, 126, 126);
  font-weight: 600;
}
</style>
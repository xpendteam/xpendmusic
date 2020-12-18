<template>
<div class="container x-mt-2">
  <h1 class="x-center">2020 TRACK LIST - XPEND MUSIC</h1><br>
  <p ><strong>Xpend Music</strong> presenta, la lista de los mejores tracks y bootlegs 2020, que formaron parte de Xpend Music. Esta lista fue seleccionada por en base al numero de apoyo que tuvo, mas la opinion de nuestro equipo y artistas que no fueron parte de ella. <i class="xf-gris">Fecha: 2018 - Junio del 2020</i></p><br>
  <h1 class="xf-1 xf-oro x-center" id="releases">Top 50 Releases</h1>
  <h3 class="xf-oro-2 xf-3 x-center">2018 - 2019 - JUNIO 2020</h3>
  <br>
<el-row class="top50list">
  <el-col :xs="24" :sm="24" :lg="11" v-for="top50 of top100" :key="top50" class="tracklist-row">
    <el-col class="tracklist-pt" :xs="5" :sm="5" :lg="3">
    <h1 class="top-position">{{top50.puesto}}</h1>
    </el-col>
    <el-col :xs="19" :sm="19" :lg="21">
    <h1 class="top-music-name">{{top50.nametrack}} <a :href="top50.link" target="_blank"><span class="x-btn tracklist-link"><i class="fa fa-music"></i> Escuchar</span></a></h1>
    <p class="top-art">{{top50.artista}}</p>
    </el-col>
  </el-col>
</el-row>

  <h1 class="xf-1 xf-oro x-center" id="bootlegs">Top 30 Bootlegs</h1>
  <h3 class="xf-oro-2 xf-3 x-center">2018 - 2019 - JUNIO 2020</h3>
  <br>
<el-row>
  <el-col :xs="24" :sm="24" :lg="24" v-for="topbootleg of topB" :key="topbootleg" class="tracklist-row">
    <el-col class="tracklist-pt" :xs="4" :sm="4" :lg="2">
    <h1 class="top-position">{{topbootleg.puesto}}</h1>
    </el-col>
    <el-col :xs="20" :sm="20" :lg="22">
    <h1 class="top-music-name">{{topbootleg.nombre}} <a :href="topbootleg.enlace" target="_blank"><span class="x-btn tracklist-link"><i class="fa fa-music"></i> Escuchar</span></a></h1>
    <p class="top-art">{{topbootleg.artistas}}</p>
    </el-col>
  </el-col>
</el-row>
</div>
</template>
<script>
import axios from 'axios'
var urlArtistas = 'https://cdn.xpendmusic.com/dt/top100.json';
var urlBootlegs = 'https://cdn.xpendmusic.com/dt/topbootleg.json'
export default {
  name: 'top10',
  created: function(){
    this.getTop10();
    this.getTopB();
  },
  data(){
    return{
      top100: [],
      topB: [],
      site: {
          titulo: "2020 TRACK LIST - XPEND MUSIC",
          img: "https://xpendmusic.com/assets/img/og-image.png",
          descripcion: "Xpend Music presenta, la lista de los mejores tracks y bootlegs 2020, que formaron parte de Xpend Music. Esta lista fue seleccionada por el numero de apoyo que tuvo mas la opinion de nuestro equipo y artistas que no fueron parte de ella."
        }
    }
  },
  methods: {
    getTop10: function(){
      axios.get(urlArtistas).then(response =>{
        this.top100 = response.data.top100
      });
    },
    getTopB: function(){
      axios.get(urlBootlegs).then(response =>{
        this.topB = response.data.topbootleg
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
<style scoped>
.top10-subtitulo{
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weight: 300 !important;
}
.tracklist-row{
  flex: auto;
  padding: 5px;
  background: var(--xpend-bg-2);
  align-items: center;
  vertical-align: middle;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 15px;
  transition: all 400ms ease;
}
.tracklist-row:hover{
    background: var(--xpend-primary)
}
.tracklist-pt{
  margin: auto;
  height: 100% !important;
}
.tracklist-link{
  float: right;
  font-size: 11px;
}
.top-position{
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: #FFF;
    text-align: center;
    padding: 5px 0px 0px 7px !important;
    width: 20px !important;
    margin-right: 35px;
}

.top-img{
    display: block;
    width: auto !important;
    height: 100px;
    padding-left: 16px;
    position: relative;
    margin-right: 20px;
}
.top-music-name{
  text-transform: uppercase;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
}
@media only screen and (max-width: 600px){
    .top-music-name{
        font-size: 15px;
    }
    .xpend-play{
        font-size: 14px;
    }
    .tracklist-link{
        font-size: 8px !important;
    }
    .top-art{
        font-size: 10px;
    }
}
.top-music-name a{
    color: #fff;
}
.top-music-name a:hover{
    color: #fff;
}
.top-art{
  color: #d3d3d3;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    font-weight: 400;
}
@media only screen and (min-width: 1200px){
    .top50list{
      padding-left: 6.5%;
}
}
.top-art a{
    color: #d3d3d3;
}
.top-art-1 a{
    color: #fff;
}
.top-art a:hover{
    color: #b9b9b9;
}
.x-btn:hover{
  background: #ffffff;
  color: #000 !important;
}
.x-btn:hover i{
  color: #000 !important;
}
.xf-oro{
  color: #EABE3F;
}
.xf-oro-2{
  color: #eabf3fdf;
  font-weight: 400;
}
</style>
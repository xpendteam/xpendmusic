<template>
<div>
  <div class="main-search" id="x-buscar" @keyup.esc="CerrarBuscador">
      <div class="main-search__container">
          <form class="main-search__form"
          @submit.prevent="Buscar"
          >
              <input id="x-buscar-input" class="main-search__input" v-model="buscar" placeholder="Buscar" name="xpend-search">
              <div @click="CerrarBuscador" class="close-search"><i class="fas fa-times"></i></div>
          </form>
      </div>
  </div>
  <nav>
        <div id="navbar-brand">
           <span><nuxt-link to="/"><img class="nav-logo logo_img" src="https://xpendmusic.com/assets/images/logo_main.svg" alt="logo"></nuxt-link></span>
        </div>

        <div id="navbar-links">
            <div id="mobile-btn">
                <button @click="AbrirBuscador">
                    <span class="xf-2"><i class="fas fa-search"></i></span>
                </button>
                <button @click="XpendMenu">
                    <span id="btn" class="xf-2"><i class="fas fa-bars"></i></span>
                </button>
            </div>

            <ul id="list" class="nav-hidden">
                <li @click="XpendMenu"><nuxt-link to="/">Inicio</nuxt-link></li>
                <li @click="XpendMenu"><nuxt-link to="/musica">Musica</nuxt-link></li>
                <li @click="XpendMenu"><nuxt-link to="/artistas">Artistas</nuxt-link></li>
                <li @click="XpendMenu"><nuxt-link to="/sessions">Sessions</nuxt-link></li>
                <li @click="XpendMenu"><a href="https://xpendmusic.com/playlist" target="_blank">Playlist</a></li>
                <li @click="XpendMenu"><nuxt-link to="/blog">blog</nuxt-link></li>
                <li @click="XpendMenu"><a href="https://demo.xpendmusic.com/">Envia tu demo</a></li>
                <li @click="XpendMenu" class="social-des">
                  <a href="https://youtube.com/c/xpendmusic" target="_blank" class="fa fa-youtube"></a> &nbsp;
                  <a href="https://www.instagram.com/xpendmusic/" target="_blank" class="fa fa-instagram"></a> &nbsp;
                  <a href="https://open.spotify.com/playlist/3Qv2SvR3jTVffX3EaUlnpO?si=WZ7F8RLFT2yqIQU-4bl9hg" target="_blank" class="fa fa-spotify"></a>
                </li>
                <li @click="AbrirBuscador" class="des-lupa"><i class="fas fa-search"></i></li>
            </ul>
            <!--<div class="buscar__container">
        <a @click="AbrirBuscador" href="#"><i class="fas fa-search"></i></a>
          </div>-->
            <ul id="bottom_list" class="nav-hidden">
                <li @click="XpendMenu"><a href="https://youtube.com/c/xpendmusic" target="_blank">
                        <i class="fa fa-youtube xf-blanco"></i>
                </a></li>
                <li @click="XpendMenu"><a href="https://www.instagram.com/xpendmusic/" target="_blank">
                        <i class="fa fa-instagram xf-blanco"></i>
                </a></li>
                <li @click="XpendMenu"><a href="https://open.spotify.com/playlist/3Qv2SvR3jTVffX3EaUlnpO?si=WZ7F8RLFT2yqIQU-4bl9hg" target="_blank">
                        <i class="fa fa-spotify xf-blanco"></i>
                </a></li>
            </ul>

        </div>
    </nav>
</div>
</template>
<script>
export default {
  data(){
    return{
      buscar: '',
    }
  },
  methods: {
    XpendMenu: function(){
          var brand = document.getElementById("navbar-brand");
          var button = document.getElementById("btn");
          var brand_item = document.getElementById("navbar-brand-item");
          var list = document.getElementById("list");
          var bottom_list = document.getElementById("bottom_list");

          list.classList.toggle("shown");
          bottom_list.classList.toggle("shown");

          if (list.classList.contains("shown")) {
              button.innerHTML = '<i class="fas fa-times"></i>';
              button.style.color = "white";
          }
          else {
              button.innerHTML = '<i class="fas fa-bars"></i>';
              button.style.color = "black";
          }
    },
    AbrirBuscador: function(){
        document.getElementById('x-buscar').style.top = "0px";
        document.getElementById('x-buscar-input').focus();
    },
    CerrarBuscador: function(){
        document.getElementById('x-buscar').style.top = "-65px";
        document.getElementById('x-buscar-input').blur();
    },
    Buscar: function(){
      this.$router.push('/search/'+this.buscar);
      document.getElementById('x-buscar').style.top = "-65px"
      document.getElementById('x-buscar-input').blur();
    }
  }
}
</script>
<style lang="scss">
@import "~/components/default.scss";
nav {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999999;
  background: $xpend-bg-2;
  -webkit-box-shadow: 0px 10px 7px -5px rgba(0,0,0,0.07);
  -moz-box-shadow: 0px 10px 7px -5px rgba(0,0,0,0.07);
  box-shadow: 0px 10px 7px -5px rgba(0,0,0,0.07);
}
nav #navbar-brand a {
  letter-spacing: 0.1rem;
  font-weight: 900;
  padding-left: 50px;
  color: $xpend-color;
}
.nav-logo{
  position: absolute;
  top: 15px;
  left: 15px;
  width: 33px;
  height: 33px;
  z-index: 1;
}
nav #navbar-links {
  display: grid;
  grid-auto-flow: column;
  justify-items: flex-end;
  align-items: center;
}
nav #navbar-links #mobile-btn {
  visibility: hidden;
}
nav #navbar-links ul {
  list-style-type: none;
  padding-inline-start: 0px;
  margin: 0px;
}
nav #navbar-links ul li {
  display: inline-block;
  margin-left: 25px;
}
nav #navbar-links ul li a {
  color: $xpend-color;
  text-decoration: none;
  transition: color 300ms ease;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.social-des a{
  font-weight: 400 !important;
}
nav #navbar-links ul li a:hover {
  color: #9e9e9e;
}
nav #navbar-links #bottom_list {
  display: none;
}
.des-lupa{
  cursor: pointer;
}
@media screen and (max-width: 1270px) {
  nav {
    padding: 1rem 1rem;
  }
  .nav-logo{
    position: absolute;
    top: 15px;
    left: 15px;
    width: 23px;
    height: 23px;
    z-index: 1;
  }
  #list{
    padding: 0!important;
  }
  #bottom_list{
    padding: 0!important;
  }
  .des-lupa{
    display: none !important;
  }
  .social-des{
    display: none !important;
  }
  nav #navbar-brand {
    z-index: 999;
  }
  nav #navbar-links #mobile-btn {
    visibility: visible;
    z-index: 999;
  }
  nav #navbar-links #mobile-btn button {
    background-color: transparent;
    outline: none;
    border: none;
  }
  nav #navbar-links #mobile-btn button:focus {
    outline: none;
    border: none;
  }
  nav #navbar-links .nav-hidden {
    display: none !important;
  }
  nav #navbar-links .shown {
    display: flex !important;
  }
  nav #navbar-links #list {
    position: fixed;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $xpend-bg-2;
    top: 0;
    left: 0;
    z-index: 500;
  }
  nav #navbar-links #list li {
    display: list-item;
    margin-left: 0px;
    margin-top: 20px;
    animation: slide-left 500ms ease-out;
  }
  @keyframes slide-left {
    0% {
      transform: translateX(300px);
    }
    70% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  nav #navbar-links #list li a {
    color: white;
    font-size: 25px;
    transition: color 300ms ease;
  }
  nav #navbar-links #list li a:hover {
    color: #000;
  }
  nav #navbar-links #list li .nuxt-link-exact-active{
    color: #9e9e9e !important;
  }
  nav #navbar-links #bottom_list {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: $xpend-bg-2;
    width: 100vw;
    height: 100px;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0px;
    margin: 0px;
    z-index: 500;
  }
  nav #navbar-links #bottom_list li {
    margin-left: 15px;
    margin-right: 15px;
    animation: slide-up 500ms ease-out;
  }
  @keyframes slide-up {
    0% {
      transform: translateY(100px);
    }
    70% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  nav #navbar-links #bottom_list li a svg path {
    transition: fill 300ms ease;
  }
  nav #navbar-links #bottom_list li a:hover > svg path {
    fill: #000;
  }
}


.buscar__container{
    position: absolute;
    top: 21px;
    right: 0px;
    z-index: 45;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    font-size: 20px;
    color: #fff;
}
.logo_img{
  filter: invert(100%);
  transition: transform .8s ease-in-out;
  cursor: pointer;
}
@media screen and (min-width: 920px){
  .logo_img:hover{
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.main-search{
    background: $xpend-bg-2;
    position: fixed;
    z-index: 99999999;
    width: 100%;
    height: 64px;
    top: -64px;
    transition: all .3s ease-in-out;
}
.main-search__container{
    height: 100%;
    padding-top: 10px;
}
.main-search__form{
    padding: 0px 60px;
    width: 100%;
    height: 40px;
}
.main-search__input{
    width: 100%;
    line-height:40px;
    font-size: 25px;
    height: 100%;
    padding: 0px;
    margin: 0px;
    border:none;
    background-image:none;
    background-color: transparent;
    color: #fff;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    cursor: hand;
    border-bottom: 2px solid #fff;
    border-spacing: 0px;
}
.main-search__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 1; /* Firefox */
}

.main-search__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #fff;
}

.main-search__input::-ms-input-placeholder { /* Microsoft Edge */
  color: #fff;
}
.main-search__input:focus {
   outline: none;
   border: specify yours;
}
.close-search{
    position: absolute;
    top: 10px;
    right: 50px;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 18px;
    cursor: pointer;
}
.main-search__open{
    display: block;
}
#list .nuxt-link-exact-active{
  color:#9e9e9e;
  pointer-events: none;
}
@media screen and (max-width: 768px){
  .main-search__form{
    padding: 0px 30px;
  }
  .close-search{
      right: 20px;
  }
}
</style>
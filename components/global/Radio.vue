<template>
<div>
<audio id="aud-dafke-radio">
    <source src="https://stream.zenolive.com/tdxywm1ww7zuv">
</audio>

<div class="main-radio" id="radio-section">
    <div class="main-radio__content">

        <a><img id="radio-img" class="main-radio__img" src="/media/image/dafke.svg"></a>
        <span @click="ReproducirRadio" class="fa fa-play main-radio__btn" id="radio-button"></span>

        <div class="main-radio__title">
            <span id="title-mobile-r">XPEND MUSIC LIVE</span><span id="title-large-d">{{radio_data.artist}} - {{radio_data.title}}</span>
            <span class="on-live parpadear"><span class="fa fa-circle on-live__p"></span> DAFKE Radio</span>
        </div>
        <span class="fa fa-times main-radio__close" @click="CerrarRadio"></span>
        <a href="https://radio.dafkerecords.com/" class="google-radio" target="_blank">ESCUCHAR DAFKE RADIO</a>
    </div>
</div>
<div class="bounce radio-open" id="radio-open" @click="AbrirRadio">
    <div class="radio-open__content">
        <img title="Radio" class="radio-open__img" id="radio-open-img" src="/media/image/dafke.svg">
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
var urlDataXpend = 'https://tools.zenoradio.com/api/stations/tdxywm1ww7zuv/now_playing/';

export default {
    name: 'Radio',
  created: function(){
    this.getData()
    this.interval = setInterval(() => this.getData(), 5000);
  },
  data(){
    return{
      radio_data: [],
      radio_active: 'none'
    }
  },
  methods: {
    getData: function(){
      axios.get(urlDataXpend).then(response =>{
        this.radio_data = response.data;
        if(this.radio_active == 'yes'){
          document.title = response.data.artist + ' - ' + response.data.title
        };
      });
    },
    AbrirRadio: function(){
          var circle_radio = document.getElementById('radio-open')
          document.getElementById('radio-section').style.bottom = '0%';
          circle_radio.classList.toggle('abrir-radio');
    },
    CerrarRadio: function(){
          var circle_radio = document.getElementById('radio-open')
          document.getElementById('radio-section').style.bottom = '-20%';
          circle_radio.classList.toggle('abrir-radio');
    },
    ReproducirRadio: function(){
          var circle_radio = document.getElementById('radio-open')
          var xpend_rd = document.querySelector('#aud-dafke-radio');
          var button = document.querySelector('#radio-button');

          if(xpend_rd.paused == true){
              xpend_rd.play();
              this.radio_active = 'yes';
          }
          else{
              xpend_rd.pause();
              this.radio_active = 'none';
          }
          xpend_rd.addEventListener("play", function() {
              circle_radio.classList.remove('bounce')
              document.getElementById('radio-open-img').classList.add("play-radio__img");
              document.getElementById('radio-img').classList.add("play-radio__img");
              button.classList.remove('fa-play');
              button.classList.add('fa-pause');
          });

          xpend_rd.addEventListener("pause", function() {
              circle_radio.classList.add("bounce");
              document.getElementById('radio-open-img').classList.remove("play-radio__img");
              document.getElementById('radio-img').classList.remove("play-radio__img");
              button.classList.remove('fa-pause');
              button.classList.add('fa-play');
              document.title = 'Xpend Music';
          });
    }
  }
}
</script>
<style lang="scss">
/* RADIO */

$radio-color: #000;
.main-radio{
    position: fixed;
    width: 100%;
    background: #1e2023;
    height: 50px;      
    bottom: -20%;
    right: 0%;
    z-index: 101;
    transition: 1s ease all;
}
.main-radio__content{
    position: relative;
    top: 10px;
    color: #fff;
}
.main-radio__img{
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 15px;
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.main-radio__btn{
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #fff;
    left: 55px;
    cursor: pointer;
}
.main-radio__title{
    font-size: 0.9rem;
    position: relative;
    top: 2px;
    left: 85px;
    font-weight: 600;
    width: 80vw;
    display: inline-block;
}
.main-radio__close{
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
}
.google-radio{
    position: absolute;
    width: 128px;
    bottom: 3px;
    border-radius: 15px;
    left: 80%;
    color: #fff !important;
    background: $radio-color;
    padding: 6px 0px;
    font-size: 0.6rem;
    text-align: center;
    display: block;
    font-weight: 400;
}
.on-live{
    position: relative;
    display: block;
    color: rgb(255, 0, 55);
    font-size: 0.5rem;
    margin: 0px;
    padding: 0px;
    bottom: 3px;
    font-weight: 600;
}
.on-live__p{
    color: rgb(255, 0, 55) !important;
}
.radio-open{
    background: $radio-color;
    padding: 8px;
    position: fixed;
    border-radius: 50%;
    height: 50px;
    width: 50px;       
    bottom: 4%;
    right: 2%;
    transition: 1s ease all;
    z-index: 1;
    cursor: pointer;
}
.radio-open__content{
    position: relative;
    width: 100%;
    height: 100%;
}
.abrir-radio{
    bottom: -20% !important;
    transition: 1s ease all;
}
.radio-open__img{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1px;
    transition: 1s ease all;
}
@keyframes rotate360 {
     to { transform: rotate(360deg);}
}
.play-radio__img {
    animation: 3s rotate360 infinite linear;
}
#title-mobile-r{
    display: none;
}
@media only screen and (max-width: 768px){
    #title-large-d{
        display: none;
    }
    #title-mobile-r{
        display: block;
    }
    .radio-open{
        bottom: 3%;
        right: 6%;
    }
    .main-radio__title{
        font-size: 0.8rem;
        width: 80vw;
    }
    .on-live{
        font-size: 0.5rem;
    }
    .google-radio{
        display: none;
    }
}
.dafkeradio{
    display: inline-block;
    color: #fff;
    position: relative;
    bottom: 76.5px;
    left:100px;
    line-height : 15px;
    font-weight: 800;
}
@keyframes blink{
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
@-webkit-keyframes blink {  
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
.parpadear {
animation-duration: .9s;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1.0,0,0,1.0); 
  -webkit-animation-name: blink;  
  -webkit-animation-iteration-count: infinite;  
  -webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  -webkit-animation-duration: .9s;
}

.bounce{
    cursor: pointer;
    box-shadow: 0 0 0 rgba($radio-color, 0.4);
    animation: pulse2 2s infinite;
}
.bounce:hover {
    animation: none;
    transition: 0.5s ease all;
}

@-webkit-keyframes pulse2 {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba($radio-color, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba($radio-color, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba($radio-color, 0);
  }
}
@keyframes pulse2 {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba($radio-color, 0.4);
    box-shadow: 0 0 0 0 rgba($radio-color, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba($radio-color, 0);
      box-shadow: 0 0 0 10px rgba($radio-color, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba($radio-color, 0);
      box-shadow: 0 0 0 0 rgba($radio-color, 0);
  }
}
</style>
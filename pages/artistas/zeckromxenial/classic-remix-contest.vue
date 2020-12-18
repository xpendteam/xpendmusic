<template>
<div class="container x-mt-2">
  <h1 class="x-center">CLASSIC ¡REMIX CONTEST!</h1>
  <p class="x-center">By Zeckrom Xenial<br><span class="xf-4 xf-gris">Future Bass | 140 BPM | C Minor / DO Menor</span></p><br>
  <el-row class="x-center">
      <el-col :xs="24" :sm="24" :lg="6" class="remix-item">
          <nuxt-link to="/artistas/zeckromxenial"><img class="main-remix_img" src="https://xpendmusic.com/artistas/artist-images/zeckrom-xenial.jpg"></nuxt-link>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="18" class="remix-item">
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/827140834&color=%23943fff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&sharing=false&show_playcount=false"></iframe>
      </el-col>
  </el-row><br>
  <div class="x-center"><a href="https://drive.google.com/drive/folders/1bwA2bs05N1efbFQDOaO-oZFN-a-2ShRD?usp=sharing" target="_blank"><span class="x-btn">Descargar Stems</span></a></div><br>
  <el-row>
          <el-col :xs="24" :sm="24" :lg="16" class="remix-item">
              <div class="x-center">
                <section class="section center22" id="ct-todo-remix">
                    <ul id="countdown" class="ul-remix">
                      <li><span class="days timenumbers" id="remix-dia">00</span>
                        <p class="timeRefDays timedescription">DIAS</p>
                      </li>
                      <li><span class="hours timenumbers" id="remix-hora">00</span>
                        <p class="timeRefHours timedescription">HORAS</p>
                      </li>
                      <li><span class="minutes timenumbers" id="remix-minuto">00</span>
                        <p class="timeRefMinutes timedescription">MINUTOS</p>
                      </li>
                      <li><span class="seconds timenumbers yellow-text" id="remix-segundo">00</span>
                        <p class="timeRefSeconds timedescription">SEGUNDOS</p>
                      </li>
                    </ul>
              </section><br>
              </div>
              <p><strong>Fecha de Inicio:</strong> 23 de Agosto<br>
              <strong>Ultimo día de entrega:</strong> 24 de Septiembre</p><br>
              <p>
                <a href="#enviar-remix" class="link">ENVIAR REMIX</a><br><br>
                Este concurso tiene como finalidad ver el talento y creatividad de todos los productores que participen. <i>Si eres un artista, estas totalmente invitado a participar.</i>
                <br><br>
                - Los ganadores serán seleccionados por Xpend Music, Wings Records y Zeckrom Xenial durante el período de evaluación.
                <br><br>Organizado por <a href="https://www.youtube.com/c/xpendmusic" target="_blank" class="link">Xpend Music</a> & <a href="https://www.youtube.com/channel/UCzuVzDEhcGenuCDFriDQ-3g" target="_blank" class="link">Wing Records</a>.
                <br><br>Síguenos:
                <span class="xf-gris">
                <br><i class="fa fa-instagram xf-gris"></i> <a class="xf-gris" href="https://instagram.com/xpendmusic" target="_blank">xpendmusic</a>
                <br><i class="fa fa-instagram xf-gris"></i> <a class="xf-gris" href="https://www.instagram.com/wingsrecords/" target="_blank">wingsrecords</a>
                <br><i class="fa fa-instagram xf-gris"></i> <a class="xf-gris" href="https://www.instagram.com/zeckrom_xenial/" target="_blank">zeckrom_xenial</a>
                </span>

              </p>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8" class="remix-premios remix-item">
              <p class="xf-oro-2">
                  <strong class="upper xf-oro">Primer Lugar</strong><br>
                  <i class="fas fa-star xf-4 xf-oro-2"></i> Sample Pack by Zeckrom Xenial<br>
                  <i class="fas fa-check-square xf-4 xf-oro-2"></i> Promoción en Xpend Music<br>
                  <i class="fas fa-check-square xf-4 xf-oro-2"></i> Promoción en Wings Records<br>
                  <i class="fas fa-music xf-4 xf-oro-2"></i> Distribución a las tiendas Digitales<br><br>

                  <strong class="upper xf-oro">Segundo Lugar</strong><br>
                  <i class="fas fa-star xf-4 xf-oro-2"></i> Sample Pack by Zeckrom Xenial<br>
                  <i class="fas fa-check-square xf-4 xf-oro-2"></i> Promoción en Xpend Music<br>
                  <i class="fas fa-music xf-4 xf-oro-2"></i> Distribución a las tiendas Digitales<br><br>

                  <strong class="upper xf-oro">Tercer Lugar</strong><br>
                  <i class="fas fa-check-square xf-4 xf-oro-2"></i> Promoción en Xpend Music<br>
                  <i class="fas fa-music xf-4 xf-oro-2"></i> Distribución a las tiendas Digitales<br><br>

                  <strong class="upper xf-oro">Cuarto y Quinto Lugar</strong><br>
                  <i class="fas fa-check-square xf-4 xf-oro-2"></i> Promoción en Wings Records<br>
                  <i class="fas fa-music xf-4 xf-oro-2"></i> Distribución a las tiendas Digitales<br>
              </p>
          </el-col>
  </el-row>
  <div class="margin-top-form"></div>
<!--
  <div class="main-form">
  <div class="main-form__item" id="enviar-remix">
    <form action="https://docs.google.com/forms/d/e/1FAIpQLSf08BsUbRuP8WALkzkJmkcmM49u-37v-tinzmT0renNsD-hVQ/formResponse"
          target="_blank"
          id="bootstrapForm"
          method="POST">
            <h2>Envia tu Remix a travez de este Formulario<br><small></small></h2><br>
            <legend class="main-form__title" for="">Email *</legend>
            <div class="form-group">
                <input id="emailAddress" type="email" name="emailAddress" class="main-form___input" required>
            </div>
            <legend class="main-form__title" for="1888205411">Nombre de Artista *</legend>
            <div class="form-group">
                <input id="1496502394" type="text" name="entry.1496502394" class="main-form___input" required>
            </div>

            <legend class="main-form__title" for="827621655">Enlace de Archivo de audio del Remix *</legend>
            <div class="form-group">
                <p class="help-block xf-3 xf-gris">Solo Soundcloud o Google Drive.</p>
                <input id="1534151006" type="text" name="entry.1534151006" class="main-form___input" required>
            </div>
            <legend class="main-form__title" for="798059679">Redes Sociales *</legend>
            <div class="form-group">
                <textarea id="373909020" name="entry.373909020" class="main-form___input" required></textarea>
            </div>

        <input type="hidden" name="fvv" value="1">
        <input type="hidden" name="fbzx" value="8003989598789698314">
        <input type="hidden" name="pageHistory" value="0">

        <input class="main-form__submit" type="submit" value="Enviar Remix">
    </form>
  </div>
</div>
-->
</div>
</template>
<script>
export default {
  name: 'Stems',
  data(){
    return{
      site: {
          titulo: "Classic - Remix Contest",
          img: "https://xpendmusic.com/assets/images/cover/classic-teaser.jpg",
          descripcion: "By Zeckrom Xenial ¡Participa Ahora!"
        }
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
  mounted() {
      var countDownDate = new Date("Sep 24, 2020 23:59:00").getTime();
      var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("remix-dia").innerHTML = days
      document.getElementById("remix-hora").innerHTML = hours 
      document.getElementById("remix-minuto").innerHTML = minutes 
      document.getElementById("remix-segundo").innerHTML = seconds 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("ct-todo-remix").innerHTML = "EL REMIX CONTEST A EXPIRADO";
      }
      }, 1000);
  }  
}
</script>
<style>
.remix-contest-img{
  width: 166px;
  height: 166px;
}
.main-remix_img{
    height: 166px;
    width: 166px;
    border-radius: 50%;
    border: 6px solid #943fff;
}
.remix-item{
  margin-top: 20px;
}
.remix-premios{
  background: var(--xpend-bg-2);
  padding: 25px;
  border-radius: 10px;
}
.xf-oro{
  color: 	#EABE3F;
}
.xf-oro-2{
  color: #eabf3fdf;
}

.section {
  color: #fff;
  margin: 0 auto;
  line-height: 24px;
  font-size: 1rem;
  font-weight: 700;
}
.section ul {
  list-style-type: none;
  margin-bottom: 0;
  margin-left: 0;
}
.section ul li {
  display: inline-block;
  width: 6rem;
}
.section .timenumbers {
  display: block;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0 auto;
  text-align: center;
}
.section p.timedescription {
  font-weight: 700;
  font-size: .8rem;
  font-variant: small-caps;
  line-height: 1.5rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 0px;
}
.main-form{
  width: 50%;
  margin: auto;
  background: var(--xpend-bg-2);
  padding: 25px;
  border-radius: 10px;
}
.margin-top-form{
  margin-top: 40px;
}
.main-form__item{
  margin: auto;
}
.main-form__title{
  font-size: 1rem;
  font-weight: 500;
}
@media only screen and (min-width: 600px){
  .center22{
    text-align: center !important; 
    margin: auto !important;
  }
}
@media only screen and (max-width: 600px){
  .section .timenumbers {
    font-size: 0.8rem;
  }
  .section p.timedescription{
    font-size: .6rem;
  }
  .section ul li {
    width: 4rem;
  }
  .main-form{
    width: 90%;
  }
}
.ul-remix{
  padding-left: 0px !important;
}
.main-form___input{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-family: inherit;
}

.main-form__submit {
  background-color: var(--xpend-primary);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.main-form__submit:hover {
  background-color: var(--xpend-bg-2);
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>
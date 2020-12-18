<template>
<footer>
    <div id="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-main__item">
            <div class="footer-main__social">
              <div>
                  <a href="https://instagram.com/xpendgroup" target="_blank"><img class="main-dafke" src="https://xpendmusic.com/assets/img/xpend_logo.svg" alt="dafke records"></a>
                  <a href="https://dafkerecords.com" target="_blank"><img class="main-dafke" src="https://xpendmusic.com/assets/img/dafke_logo_main.png" alt="dafke records"></a>
              </div>
              <a href="https://facebook.com/xpendmusic" target="_blank"><i class="fab fa-facebook-square"></i></a> 
              <a href="https://instagram.com/xpendmusic" target="_blank"><i class="fab fa-instagram-square"></i> </a>
              <a href="https://twitter.com/xpendmusic" target="_blank"><i class="fab fa-twitter-square"></i> </a>
              <a href="https://youtube.com/c/xpendmusic" target="_blank"><i class="fab fa-youtube-square"></i></a><br><br></div>
            <p>Copyright © 2020 <strong><a href="https://xpendmusic.com" class="xf-blanco">Xpend Music</a></strong>, Todos los derechos reservados.</p><br>
            <p class="x-center">
              <nuxt-link to="/tracklist" class="xf-blanco">2020 Track List</nuxt-link> | 
              <nuxt-link to="/tracklist" class="xf-blanco">Stems</nuxt-link> | 
              <nuxt-link to="/acerca-de" class="xf-blanco">Acerca de</nuxt-link> | 
              <nuxt-link to="/contacto" class="xf-blanco">Contacto</nuxt-link>
            </p>
          </div>
        </div>
      </div>
  </div>
</footer>
</template>
<style lang="scss" scoped>
@import "~/components/styles/default.scss";
html {
  min-height: 100%;
  position: relative;
}
html body {
  margin-bottom: 60px;
}
html #footer {
  bottom: 0;
  width: 100%;
  position: absolute;
  height: 200px;
  background-image: linear-gradient($xpend-bg, $xpend-bg-2);
  color: #fff;
}
.footer-main{
  width: 100%;
  height: 200px;
  position: relative;
}
.footer-main__item{
  width: 100%;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}
.footer-main__social{
  letter-spacing: 5px;
  line-height: 5px;
}
.footer-main__social i{
  color: #b8b8b8;
  font-size: 1.2rem;
}
.footer-main__social i:hover{
  color: #fff;
}
.main-dafke{
  width: 170px;
  margin-bottom: 20px;
  padding: 0px 20px;
}
@media only screen and (max-width: 600px){
  .main-dafke{
    width: 150px;
    display: block;
    margin: auto;
    padding: 0px 0px;
    padding-bottom: 20px;
  }
  html #footer {
    bottom: 0;
    width: 100%;
    position: absolute;
    height: 250px;
    background-image: linear-gradient($xpend-bg, $xpend-bg-2);
    color: #fff;
  }
  .footer-main{
    width: 100%;
    height: 250px;
    position: relative;
  }
  .xpend-botton{
    padding-top: 250px;
  }
}
</style>
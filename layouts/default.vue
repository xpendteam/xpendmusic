<template>
    <div>
        <Cabecera />
        <div class="xpend-top"></div>
        <div>
            <Nuxt />
            <div class="xpend-botton"></div>
        </div>
        <div id="footer">
            <div class="container">
                <div class="footer-main">
                    <div class="footer-main__item">
                        <div class="footer-main__social">
                            <div>
                                <a href="https://instagram.com/xpendgroup" target="_blank">
                                    <img
                                        class="main-dafke"
                                        src="https://xpendmusic.com/assets/img/xpend_logo.svg"
                                        alt="dafke records"
                                    />
                                </a>
                                <a href="https://dafkerecords.com" target="_blank">
                                    <img
                                        class="main-dafke"
                                        src="https://xpendmusic.com/assets/img/dafke_logo_main.png"
                                        alt="dafke records"
                                    />
                                </a>
                            </div>
                            <a href="https://facebook.com/xpendmusic" target="_blank">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://instagram.com/xpendmusic" target="_blank">
                                <i class="fab fa-instagram-square"></i>
                            </a>
                            <a href="https://twitter.com/xpendmusic" target="_blank">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                            <a href="https://youtube.com/c/xpendmusic" target="_blank">
                                <i class="fab fa-youtube-square"></i>
                            </a>
                            <br />
                            <br />
                        </div>
                        <p class="x-center">
                            <nuxt-link to="/tracklist" class="xf-gris">2020 Track List</nuxt-link>-
                            <nuxt-link to="/stems" class="xf-gris">Stems</nuxt-link>-
                            <nuxt-link to="/acerca-de" class="xf-gris">Acerca de</nuxt-link>-
                            <nuxt-link to="/contacto" class="xf-gris">Contacto</nuxt-link>
                        </p>
                        <br />
                        <p>
                            Copyright © 2020
                            <strong>
                                <a href="https://xpendmusic.com" class="xf-blanco">Xpend Music</a>
                            </strong>, Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Radio />
    </div>
</template>
<script>
import axios from "axios";
import Radio from "~/components/Radio.vue";
import Cabecera from "~/components/sections/Header.vue";
export default {
    components: {
        Radio,
        Cabecera,
    },
    head: {
        script: [
            {
                src: "https://kit.fontawesome.com/31ef3d53d0.js",
            },
            {
                src: "https://cdn.jsdelivr.net/npm/fuse.js@6.4.3",
            },
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
            },
            {
                rel: "stylesheet",
                href:
                    "https://cdn.jsdelivr.net/npm/ascendcss@1.0.3/dist/css/ascend.min.css",
            },
        ],
    },
};
</script>
<style lang="scss">
@import "~/components/default.scss";
* {
    --xpend-primary: #943fff;
    --xpend-bg: #131416;
    --xpend-bg-2: #18191c;
    --xpend-color: #ffffff;
    --xpend-color-negro: #000;
    --xpend-titulo: #ffffff;
    --xpend-bg-3: #141417;
    --xpend-50: 50%;
}
html {
    overflow-y: scroll;
}
/* width */
::-webkit-scrollbar {
    width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
    background: $xpend-bg-2;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(97, 97, 97);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #fff;
}
html {
    font-family: "Inter", sans-serif !important;
    font-size: 16px;
    scroll-behavior: smooth !important;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
.nav-links a {
    color: #ffffff;
}
p,
i,
span,
li,
ul,
div {
    color: var(--xpend-color);
    font-weight: 300;
}
h2,
h3 {
    color: var(--xpend-color);
    font-weight: 450;
}
h1 {
    color: var(--xpend-color);
    font-weight: 700;
}
* a {
    text-decoration: none;
    color: $xpend-primary;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: $xpend-color;
    box-shadow: 0 0 0px 1000px $xpend-bg-2 inset;
    -webkit-box-shadow: 0 0 0px 1000px $xpend-bg-2 inset;
    caret-color: $xpend-color;
}
body {
    background: $xpend-bg;
}
.xpend-top {
    padding-top: 64px;
}
.xpend-botton {
    padding-top: 200px;
}
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
.footer-main {
    width: 100%;
    height: 200px;
    position: relative;
}
.footer-main__item {
    width: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
}
.footer-main__social {
    letter-spacing: 5px;
    line-height: 5px;
}
.footer-main__social i {
    color: #b8b8b8;
    font-size: 1.2rem;
}
.footer-main__social i:hover {
    color: #fff;
}
.main-dafke {
    width: 170px;
    margin-bottom: 20px;
    padding: 0px 20px;
}
@media only screen and (max-width: 768px) {
    .xpend-top {
        padding-top: 42px;
    }
    .main-dafke {
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
    .footer-main {
        width: 100%;
        height: 250px;
        position: relative;
    }
    .xpend-botton {
        padding-top: 250px;
    }
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}
@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}
@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}
/* Xpend Library */
.x-pt-2 {
    padding-top: 2rem;
}
.x-mt-2 {
    margin-top: 2rem;
}
.x-nav-link {
    font-weight: 600;
}
.xf-xpend {
    color: $xpend-primary !important;
}
.xb-xpend {
    background: $xpend-primary !important;
}
.xf-blanco {
    color: #fff !important;
}
.xb-blanco {
    background: #fff !important;
}
.xf-negro {
    color: #000 !important;
}
.xb-negro {
    background: #141417 !important;
}
.xf-gris {
    color: #bcbcbc !important;
}
.xb-gris {
    background: #9b9b9b !important;
}
.x-center {
    text-align: center !important;
    margin: auto !important;
}
.xf-b {
    font-weight: 700 !important;
}
.xf-l {
    font-weight: 200 !important;
}
.xf-c {
    font-style: italic !important;
}
.xf-4 {
    font-size: 11px !important;
}
.xf-3 {
    font-size: 15px !important;
}
.xf-2 {
    font-size: 22px !important;
}
.xf-1 {
    font-size: 30px !important;
}
.x-e {
    padding-top: 5px;
}
.x-btn {
    text-decoration: none;
    color: #fff;
    margin: 10px;
    background: $xpend-primary;
    padding: 8px 13px;
    border-radius: 30px;
    text-decoration: none !important;
    font-size: 0.8rem;
    display: inline-block;
}
.x-btn:hover {
    transition: 0.2s all;
    background: #000;
    color: #fff;
}
.x-btnl {
    text-decoration: none;
    color: #fff;
    margin: 10px;
    background: $xpend-primary;
    padding: 10px 40px;
    border-radius: 30px;
    text-decoration: none !important;
}
.x-btnl:hover {
    background: #000;
    color: #fff;
    transition: 0.2s all;
    text-decoration: none !important;
}
.x-btn-spotify {
    text-decoration: none;
    color: #fff;
    margin: 10px;
    background: #1db954;
    padding: 10px 15px;
    border-radius: 30px;
    text-decoration: none !important;
}
.x-btn-youtube {
    text-decoration: none;
    color: #fff;
    background: red;
    padding: 10px 15px;
    border-radius: 30px;
    text-decoration: none !important;
    display: inline-block;
}
.x-btn-spotify,
.x-btn-youtube:hover {
    background: #000;
    color: #fff !important;
}
@media only screen and (max-width: 600px) {
    .x-btn {
        font-size: 11px !important;
    }
    .menuopen {
        display: block !important;
        position: relative;
    }
    .x-btn-youtube {
        font-size: 11px !important;
    }
}
.boton-bio {
    text-decoration: none;
    color: #fff;
    font-size: 10px;
    margin: 10px;
    background: $xpend-primary;
    padding: 5px 10px;
    border-radius: 30px;
    text-decoration: none !important;
}
.boton-bio:hover {
    background: #000;
    color: #fff;
    transition: 0.2s all;
    text-decoration: none !important;
}
.verificado {
    color: #888888;
    font-size: 17px !important;
    cursor: default;
}
.verificado2 {
    color: #888888;
    font-size: 22px !important;
    cursor: default;
}
/* fin xpend library */

.art-bio a {
    color: #ae6eff;
}
.art-bio p {
    margin-bottom: 15px;
}
.albumes {
    color: #fff;
    border-bottom: solid 1px $xpend-primary;
}
.albumes:hover {
    background: $xpend-primary;
    transition: all 200ms ease;
}
.artistas_main {
    border-radius: 50%;
    transition: opacity 150ms ease-in-out;
}
.portadas_main {
    border-radius: 2%;
    width: 88%;
    height: 88%;
    margin-top: 20px;
    margin-bottom: 20px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}
@media only screen and (min-width: 768px) {
    .portadas_main:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
}
.artistas_main:hover {
    opacity: 0.6;
}
.upper {
    text-transform: uppercase;
}
.link {
    color: #fff;
    border-bottom: solid 1px $xpend-primary;
}
.link:hover {
    background: $xpend-primary;
    transition: all 200ms ease;
}
.blog-act {
    font-size: 0.8rem;
    color: rgb(146, 146, 146);
}
</style>
<template>
    <div>
        <div class="main-search" id="x-buscar" @keyup.esc="CerrarBuscador">
            <div class="main-search__container">
                <form class="main-search__form" @submit.prevent="Buscar">
                    <input
                        id="x-buscar-input"
                        class="main-search__input"
                        v-model="buscar"
                        placeholder="Buscar"
                        name="xpend-search"
                    />
                    <div @click="CerrarBuscador" class="close-search">
                        <i class="fas fa-times"></i>
                    </div>
                </form>
            </div>
        </div>
        <nav>
            <div id="navbar-brand">
                <span>
                    <nuxt-link to="/">
                        <img
                            class="nav-logo logo_img"
                            src="https://xpendmusic.com/assets/images/logo_main.svg"
                            alt="logo"
                        />
                    </nuxt-link>
                </span>
            </div>

            <div id="navbar-links">
                <div id="mobile-btn">
                    <button @click="AbrirBuscador">
                        <span class="xf-2">
                            <i class="fas fa-search"></i>
                        </span>
                    </button>
                    <button @click="XpendMenu">
                        <span id="btn" class="xf-2">
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                </div>

                <ul id="list" class="nav-hidden">
                    <li @click="XpendMenu">
                        <nuxt-link to="/">Inicio</nuxt-link>
                    </li>
                    <li @click="XpendMenu">
                        <nuxt-link to="/releases">Releases</nuxt-link>
                    </li>
                    <li @click="XpendMenu">
                        <nuxt-link to="/artistas">Artistas</nuxt-link>
                    </li>
                    <li @click="XpendMenu">
                        <nuxt-link to="/sessions">Sessions</nuxt-link>
                    </li>
                    <li @click="XpendMenu">
                        <nuxt-link to="/blog">blog</nuxt-link>
                    </li>
                    <li @click="XpendMenu">
                        <a href="https://xpendmusic.com/playlist" target="_blank">Playlist</a>
                    </li>
                    <li @click="XpendMenu">
                        <a href="https://demo.xpendmusic.com/">Envia tu demo</a>
                    </li>
                    <li @click="XpendMenu" class="social-des">
                        <a
                            href="https://youtube.com/c/xpendmusic"
                            target="_blank"
                            class="fa fa-youtube"
                        ></a> &nbsp;
                        <a
                            href="https://www.instagram.com/xpendmusic/"
                            target="_blank"
                            class="fa fa-instagram"
                        ></a> &nbsp;
                        <a
                            href="https://open.spotify.com/playlist/3Qv2SvR3jTVffX3EaUlnpO?si=WZ7F8RLFT2yqIQU-4bl9hg"
                            target="_blank"
                            class="fa fa-spotify"
                        ></a>
                    </li>
                    <li @click="AbrirBuscador" class="des-lupa">
                        <i class="fas fa-search"></i>
                    </li>
                </ul>
                <ul id="bottom_list" class="nav-hidden">
                    <li @click="XpendMenu">
                        <a href="https://youtube.com/c/xpendmusic" target="_blank">
                            <i class="fa fa-youtube xf-blanco"></i>
                        </a>
                    </li>
                    <li @click="XpendMenu">
                        <a href="https://www.instagram.com/xpendmusic/" target="_blank">
                            <i class="fa fa-instagram xf-blanco"></i>
                        </a>
                    </li>
                    <li @click="XpendMenu">
                        <a
                            href="https://open.spotify.com/playlist/3Qv2SvR3jTVffX3EaUlnpO?si=WZ7F8RLFT2yqIQU-4bl9hg"
                            target="_blank"
                        >
                            <i class="fa fa-spotify xf-blanco"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            buscar: "",
        };
    },
    methods: {
        XpendMenu: function () {
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
            } else {
                button.innerHTML = '<i class="fas fa-bars"></i>';
                button.style.color = "black";
            }
        },
        AbrirBuscador: function () {
            document.getElementById("x-buscar").style.top = "0px";
            document.getElementById("x-buscar-input").focus();
        },
        CerrarBuscador: function () {
            document.getElementById("x-buscar").style.top = "-65px";
            document.getElementById("x-buscar-input").blur();
        },
        Buscar: function () {
            this.$router.push("/search/" + this.buscar);
            document.getElementById("x-buscar").style.top = "-65px";
            document.getElementById("x-buscar-input").blur();
        },
    },
};
</script>
<style lang="scss">
@import "~/assets/styles/main.scss";
@import "~/assets/styles/components/header.scss";
</style>
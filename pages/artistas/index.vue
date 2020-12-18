<template>
    <div class="x-center container">
        <h1 class="py text-center" style="--py: 25px">ARTISTAS</h1>
        <div class="grid grid-2 md:grid-3 lg:grid-6 gap-10">
            <div v-for="(artista, index) of artistas" :key="index">
                <nuxt-link :to="artista.key">
                    <img class="artist-img" v-bind:src="artista.image" />
                </nuxt-link>
                <p class="text-center">
                    <nuxt-link :to="artista.key" class="artist-name">{{artista.name}}</nuxt-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    created: function () {
        this.getData();
    },
    data() {
        return {
            artistas: [],
            site: {
                titulo: "Artistas - Xpend Music",
                img: "https://xpendmusic.com/assets/img/og-image.png",
                descripcion:
                    "Todos los artistas que formaron parte de Xpend Music. Future Trials, Frank Alvarez, Justin Ankeens entre otros",
            },
        };
    },
    methods: {
        getData: function () {
            axios
                .get("https://cdn.xpendmusic.com/api/artists/")
                .then((response) => {
                    this.artistas = response.data;
                });
        },
    },
    head() {
        return {
            title: this.site.titulo,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.site.descripcion,
                },
                { property: "og:description", content: this.site.descripcion },
                { property: "og:title", content: this.site.titulo },
                { property: "og:image", content: this.site.img },
                { name: "twitter:image", content: this.site.img },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:site", content: "@xpendmusic" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/main.scss";
@import "~/assets/styles/pages/artistas/index.scss";
</style>